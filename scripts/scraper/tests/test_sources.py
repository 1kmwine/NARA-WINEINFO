# scripts/scraper/tests/test_sources.py
import pytest
import responses as resp_lib
from unittest.mock import patch, MagicMock
from sources.naver_blog import NaverBlogScraper
from sources.naver_cafe import NaverCafeScraper
from sources.youtube_scraper import YouTubeScraper

# --- Fixtures ---

NAVER_BLOG_HTML = """
<html><body>
<ul class="lst_total">
  <li class="bx">
    <a href="https://blog.naver.com/winelover/123456" class="api_txt_lines total_tit">
      케이머스 나파 밸리 카베르네 소비뇽 시음 후기
    </a>
    <div class="api_txt_lines dsc_txt_wrap">
      진한 블랙프루트와 부드러운 타닌이 인상적인 와인이었습니다.
    </div>
  </li>
</ul>
</body></html>
"""

NAVER_CAFE_HTML = """
<html><body>
<ul class="lst_total">
  <li class="bx">
    <a href="https://cafe.naver.com/winerack24/9876" class="api_txt_lines total_tit">
      [카페] 케이머스 나파 밸리 리뷰
    </a>
    <div class="api_txt_lines dsc_txt_wrap">
      와인랙24 회원이 작성한 리뷰입니다.
    </div>
  </li>
</ul>
</body></html>
"""

DDG_BLOG_HTML = """
<html><body>
<div class="result">
  <h2 class="result__title">
    <a class="result__a" href="//duckduckgo.com/l/?uddg=https%3A%2F%2Fblog.naver.com%2Fuser%2Fpost1&rut=abc">
      샤토 마고 2018 시음기
    </a>
  </h2>
  <div class="result__snippet">풍부한 타닌과 복합적인 향이 인상적이었습니다.</div>
</div>
</body></html>
"""

DDG_CAFE_HTML = """
<html><body>
<div class="result">
  <h2 class="result__title">
    <a class="result__a" href="//duckduckgo.com/l/?uddg=https%3A%2F%2Fcafe.naver.com%2Fwinerack24%2F12345&rut=xyz">
      카페 글: 샤토 마고 리뷰
    </a>
  </h2>
  <div class="result__snippet">와인랙24 회원이 작성한 리뷰입니다.</div>
</div>
</body></html>
"""

# --- Naver Blog tests ---

@resp_lib.activate
@patch("sources.naver_blog.search_wine_claude", return_value=[])
def test_naver_blog_scraper_naver_primary(mock_claude):
    """Naver search is used as primary source."""
    resp_lib.add(resp_lib.GET, "https://search.naver.com/search.naver", body=NAVER_BLOG_HTML, status=200)
    scraper = NaverBlogScraper()
    items = scraper.scrape_wine(1, "caymus-napa", "케이머스 나파 밸리")
    assert len(items) == 1
    assert items[0].url == "https://blog.naver.com/winelover/123456"
    assert items[0].sourceType == "naver_blog"
    assert items[0].extra.get("source") == "naver_search"


@resp_lib.activate
@patch("sources.naver_blog.search_wine_claude", return_value=[])
def test_naver_blog_scraper_ddg_fallback(mock_claude):
    """Falls back to DuckDuckGo when Naver returns no blog links."""
    resp_lib.add(resp_lib.GET, "https://search.naver.com/search.naver", body="<html><body></body></html>", status=200)
    resp_lib.add(resp_lib.GET, "https://html.duckduckgo.com/html/", body=DDG_BLOG_HTML, status=200)
    scraper = NaverBlogScraper()
    items = scraper.scrape_wine(1, "chateau-margaux", "샤토 마고")
    assert len(items) == 1
    assert items[0].url == "https://blog.naver.com/user/post1"


@resp_lib.activate
@patch("sources.naver_blog.search_wine_claude", return_value=[])
def test_naver_blog_scraper_no_results(mock_claude):
    resp_lib.add(resp_lib.GET, "https://search.naver.com/search.naver", body="<html><body></body></html>", status=200)
    resp_lib.add(resp_lib.GET, "https://html.duckduckgo.com/html/", body="<html><body></body></html>", status=200)
    scraper = NaverBlogScraper()
    items = scraper.scrape_wine(1, "unknown-wine", "없는와인")
    assert items == []


def test_naver_blog_scraper_claude_primary():
    """Claude results bypass Naver search when available."""
    mock_results = [
        {"title": "샤토 마고 2023 리뷰", "url": "https://blog.naver.com/wine/123", "summary": "훌륭한 와인"},
    ]
    with patch("sources.naver_blog.search_wine_claude", return_value=mock_results):
        with patch("sources.naver_blog.NaverBlogScraper._scrape_via_naver", return_value=[]):
            scraper = NaverBlogScraper()
            items = scraper.scrape_wine(1, "chateau-margaux", "샤토 마고")
    assert len(items) == 1
    assert items[0].url == "https://blog.naver.com/wine/123"
    assert items[0].extra.get("source") == "claude_search"


# --- Naver Cafe tests ---

@resp_lib.activate
@patch("sources.naver_cafe.search_wine_claude", return_value=[])
def test_naver_cafe_scraper_naver_primary(mock_claude):
    """Falls through WASSAP (network error) → Naver search."""
    # WASSAP not registered → ConnectionError → []
    resp_lib.add(resp_lib.GET, "https://search.naver.com/search.naver", body=NAVER_CAFE_HTML, status=200)
    scraper = NaverCafeScraper()
    items = scraper.scrape_wine(2, "caymus-napa", "케이머스 나파 밸리")
    assert len(items) == 1
    assert items[0].url == "https://cafe.naver.com/winerack24/9876"
    assert items[0].extra.get("cafeName") == "winerack24"


@resp_lib.activate
@patch("sources.naver_cafe.search_wine_claude", return_value=[])
def test_naver_cafe_scraper_ddg_fallback(mock_claude):
    """Falls back to DuckDuckGo when all others fail."""
    # WASSAP → ConnectionError → [], Naver → empty, Claude → []
    resp_lib.add(resp_lib.GET, "https://search.naver.com/search.naver", body="<html><body></body></html>", status=200)
    resp_lib.add(resp_lib.GET, "https://html.duckduckgo.com/html/", body=DDG_CAFE_HTML, status=200)
    scraper = NaverCafeScraper()
    items = scraper.scrape_wine(2, "chateau-margaux", "샤토 마고")
    assert len(items) == 1
    assert items[0].url == "https://cafe.naver.com/winerack24/12345"
    assert items[0].extra.get("cafeName") == "winerack24"


@resp_lib.activate
@patch("sources.naver_cafe.search_wine_claude", return_value=[])
def test_naver_cafe_scraper_wassap(mock_claude):
    """WASSAP API match returns results first."""
    wassap_data = [
        {"title": "샤토 마고 2023 후기", "url": "https://cafe.naver.com/winerack24/9999", "content": "샤토 마고 정말 맛있어요"},
        {"title": "전혀 다른 글", "url": "https://cafe.naver.com/winerack24/8888", "content": "관련 없는 내용"},
    ]
    resp_lib.add(resp_lib.GET, "https://create-repl--dashnaracellar.replit.app/articles", json=wassap_data, status=200)
    scraper = NaverCafeScraper()
    items = scraper.scrape_wine(3, "chateau-margaux", "샤토 마고")
    assert len(items) == 1
    assert items[0].url == "https://cafe.naver.com/winerack24/9999"
    assert items[0].extra.get("source") == "wassap"


# --- YouTube tests ---

MOCK_SCRAPETUBE_VIDEOS = [
    {
        "videoId": "dQw4w9WgXcQ",
        "title": {"runs": [{"text": "샤토 마고 2018 테이스팅"}]},
        "thumbnail": {"thumbnails": [{"url": "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg"}]},
        "detailedMetadataSnippets": [{"snippetText": {"runs": [{"text": "보르도 최고 와인 시음"}]}}],
    }
]


def test_youtube_scraper_scrapetube(monkeypatch):
    def mock_get_search(query, limit=10):
        return iter(MOCK_SCRAPETUBE_VIDEOS)

    monkeypatch.setattr("scrapetube.get_search", mock_get_search)

    scraper = YouTubeScraper()
    with patch.object(scraper, "_get_transcript_summary", return_value=None):
        items = scraper.scrape_wine(1, "chateau-margaux", "샤토 마고")

    assert len(items) == 1
    assert items[0].sourceType == "youtube"
    assert items[0].url == "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    assert items[0].thumbnailUrl is not None
    assert items[0].publishedAt is None


def test_youtube_scraper_scrapetube_error(monkeypatch):
    def mock_get_search(query, limit=10):
        raise RuntimeError("network error")

    monkeypatch.setattr("scrapetube.get_search", mock_get_search)

    scraper = YouTubeScraper()
    items = scraper.scrape_wine(1, "chateau-margaux", "샤토 마고")
    assert items == []
