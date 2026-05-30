# scripts/scraper/tests/test_sources.py
import pytest
import responses as resp_lib
from unittest.mock import patch, MagicMock
from sources.naver_blog import NaverBlogScraper
from sources.naver_cafe import NaverCafeScraper
from sources.youtube_scraper import YouTubeScraper

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


@resp_lib.activate
@patch("sources.naver_blog.search_wine_claude", return_value=[])
def test_naver_blog_scraper_ddg(mock_claude):
    resp_lib.add(
        resp_lib.GET,
        "https://html.duckduckgo.com/html/",
        body=DDG_BLOG_HTML,
        status=200,
    )
    scraper = NaverBlogScraper()
    items = scraper.scrape_wine(1, "chateau-margaux", "샤토 마고")
    assert len(items) == 1
    assert items[0].wineId == 1
    assert items[0].sourceType == "naver_blog"
    assert "마고" in items[0].title
    assert items[0].url == "https://blog.naver.com/user/post1"
    assert items[0].summary != ""


@resp_lib.activate
@patch("sources.naver_blog.search_wine_claude", return_value=[])
def test_naver_blog_scraper_no_results(mock_claude):
    resp_lib.add(
        resp_lib.GET,
        "https://html.duckduckgo.com/html/",
        body="<html><body></body></html>",
        status=200,
    )
    scraper = NaverBlogScraper()
    items = scraper.scrape_wine(1, "unknown-wine", "없는와인")
    assert items == []


def test_naver_blog_scraper_claude_primary():
    """Claude results are used directly when available."""
    mock_results = [
        {"title": "샤토 마고 2023 리뷰", "url": "https://blog.naver.com/wine/123", "summary": "훌륭한 와인"},
    ]
    with patch("sources.naver_blog.search_wine_claude", return_value=mock_results):
        scraper = NaverBlogScraper()
        items = scraper.scrape_wine(1, "chateau-margaux", "샤토 마고")
    assert len(items) == 1
    assert items[0].url == "https://blog.naver.com/wine/123"
    assert items[0].extra.get("source") == "claude_search"


@resp_lib.activate
@patch("sources.naver_cafe.search_wine_claude", return_value=[])
def test_naver_cafe_scraper_ddg(mock_claude):
    # WASSAP API returns connection error (unregistered) → falls through
    # Claude search mocked to return [] → falls through to DDG
    resp_lib.add(
        resp_lib.GET,
        "https://html.duckduckgo.com/html/",
        body=DDG_CAFE_HTML,
        status=200,
    )
    scraper = NaverCafeScraper()
    items = scraper.scrape_wine(2, "chateau-margaux", "샤토 마고")
    assert len(items) == 1
    assert items[0].sourceType == "naver_cafe"
    assert items[0].url == "https://cafe.naver.com/winerack24/12345"
    assert items[0].extra.get("cafeName") == "winerack24"


@resp_lib.activate
@patch("sources.naver_cafe.search_wine_claude", return_value=[])
def test_naver_cafe_scraper_wassap(mock_claude):
    wassap_data = [
        {"title": "샤토 마고 2023 후기", "url": "https://cafe.naver.com/winerack24/9999", "content": "샤토 마고 정말 맛있어요"},
        {"title": "전혀 다른 글", "url": "https://cafe.naver.com/winerack24/8888", "content": "관련 없는 내용"},
    ]
    resp_lib.add(
        resp_lib.GET,
        "https://create-repl--dashnaracellar.replit.app/articles",
        json=wassap_data,
        status=200,
    )
    scraper = NaverCafeScraper()
    items = scraper.scrape_wine(3, "chateau-margaux", "샤토 마고")
    assert len(items) == 1
    assert items[0].url == "https://cafe.naver.com/winerack24/9999"
    assert items[0].extra.get("source") == "wassap"


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
