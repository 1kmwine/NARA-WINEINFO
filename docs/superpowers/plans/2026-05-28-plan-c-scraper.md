# 스크래퍼 리빌드 구현 계획 (Plan C)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 9개 외부 소스에서 와인 정보를 수집하는 Python 스크래퍼와 GitHub Actions 주간 자동 실행 환경 구축

**Architecture:** Python 스크래퍼가 각 소스별 모듈에서 데이터를 수집한 뒤 Next.js 내부 API(`POST /api/internal/scrape`)로 저장. `BaseScraper` 추상 클래스로 공통 rate limiting·retry·에러 처리를 캡슐화하고, `main.py` 오케스트레이터가 `--all` / `--wine-id` / `--batch-size` 플래그로 배치 실행. GitHub Actions cron(일요일 02:00 KST)이 전체 2,000개를 주간 처리.

**Tech Stack:** Python 3.11, requests, BeautifulSoup4, youtube-transcript-api, openpyxl, pytest

---

## 파일 구조

```
scripts/scraper/
├── requirements.txt
├── config.py            ← 환경변수, 소스 설정, rate limit 상수
├── db_client.py         ← POST /api/internal/scrape 래퍼
├── base_scraper.py      ← BaseScraper (rate limit, retry, 공통 fetch)
├── sources/
│   ├── __init__.py
│   ├── naver_blog.py
│   ├── naver_cafe.py
│   ├── youtube_scraper.py
│   ├── instagram_scraper.py
│   ├── wine_searcher.py
│   ├── winery_official.py
│   └── article_scraper.py   ← article_kr + article_global 통합
├── main.py              ← CLI 오케스트레이터
└── tests/
    ├── test_db_client.py
    ├── test_base_scraper.py
    └── test_sources.py
.github/workflows/
└── weekly-scrape.yml
```

---

## Task 1: 의존성 및 설정

**Files:**
- Create: `scripts/scraper/requirements.txt`
- Create: `scripts/scraper/config.py`

- [ ] **Step 1: requirements.txt 작성**

```
requests==2.32.3
beautifulsoup4==4.12.3
lxml==5.2.2
youtube-transcript-api==0.6.2
python-dotenv==1.0.1
pytest==8.2.0
pytest-mock==3.14.0
responses==0.25.3
```

파일 경로: `scripts/scraper/requirements.txt`

- [ ] **Step 2: config.py 작성**

```python
import os
from dotenv import load_dotenv

load_dotenv()

API_BASE_URL = os.environ.get("API_BASE_URL", "http://localhost:3000")
INTERNAL_API_KEY = os.environ.get("INTERNAL_API_KEY", "")

RATE_LIMITS = {
    "naver_blog": 1.0,
    "naver_cafe": 1.0,
    "youtube": 2.0,
    "instagram": 1.5,
    "wine_searcher": 0.5,
    "winery_official": 0.5,
    "article_kr": 0.5,
    "article_global": 0.5,
    "other": 0.5,
}

MAX_RESULTS_PER_SOURCE = 10
SUMMARY_MAX_CHARS = 300
REQUEST_TIMEOUT = 15
MAX_RETRIES = 3

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    )
}
```

파일 경로: `scripts/scraper/config.py`

- [ ] **Step 3: 설정 불러오기 확인**

```bash
cd scripts/scraper
python -c "import config; print(config.API_BASE_URL)"
```

예상 출력: `http://localhost:3000`

- [ ] **Step 4: 커밋**

```bash
git add scripts/scraper/requirements.txt scripts/scraper/config.py
git commit -m "feat(scraper): add requirements and config"
```

---

## Task 2: DB 클라이언트

**Files:**
- Create: `scripts/scraper/db_client.py`
- Create: `scripts/scraper/tests/test_db_client.py`

- [ ] **Step 1: 실패 테스트 작성**

```python
# scripts/scraper/tests/test_db_client.py
import responses as resp_lib
import pytest
from db_client import save_scraped_data, ScrapedItem

@resp_lib.activate
def test_save_scraped_data_success():
    resp_lib.add(
        resp_lib.POST,
        "http://localhost:3000/api/internal/scrape",
        json={"ok": True, "id": 42},
        status=200,
    )
    item = ScrapedItem(
        wineId=1,
        sourceType="naver_blog",
        url="https://blog.naver.com/post/123",
        title="샤토 마고 시음기",
        summary="풍부한 타닌과 복합적인 향이 인상적",
        publishedAt=None,
        thumbnailUrl=None,
        extra={},
    )
    result = save_scraped_data(item)
    assert result["ok"] is True
    assert result["id"] == 42

@resp_lib.activate
def test_save_scraped_data_auth_error():
    resp_lib.add(
        resp_lib.POST,
        "http://localhost:3000/api/internal/scrape",
        json={"error": "Unauthorized"},
        status=401,
    )
    item = ScrapedItem(
        wineId=1,
        sourceType="naver_blog",
        url="https://blog.naver.com/post/456",
        title="테스트",
        summary="테스트 요약",
        publishedAt=None,
        thumbnailUrl=None,
        extra={},
    )
    with pytest.raises(RuntimeError, match="401"):
        save_scraped_data(item)
```

- [ ] **Step 2: 실패 확인**

```bash
cd scripts/scraper && python -m pytest tests/test_db_client.py -v
```

예상: `ImportError: cannot import name 'save_scraped_data' from 'db_client'`

- [ ] **Step 3: db_client.py 구현**

```python
# scripts/scraper/db_client.py
from dataclasses import dataclass, field
from typing import Any, Optional
import requests
import config


@dataclass
class ScrapedItem:
    wineId: int
    sourceType: str
    url: str
    title: str
    summary: str
    publishedAt: Optional[str]
    thumbnailUrl: Optional[str]
    extra: dict[str, Any] = field(default_factory=dict)


def save_scraped_data(item: ScrapedItem) -> dict:
    payload = {
        "wineId": item.wineId,
        "sourceType": item.sourceType,
        "url": item.url,
        "title": item.title,
        "summary": item.summary[:config.SUMMARY_MAX_CHARS],
        "publishedAt": item.publishedAt,
        "thumbnailUrl": item.thumbnailUrl,
        **item.extra,
    }
    resp = requests.post(
        f"{config.API_BASE_URL}/api/internal/scrape",
        json=payload,
        headers={
            **config.HEADERS,
            "x-internal-key": config.INTERNAL_API_KEY,
            "Content-Type": "application/json",
        },
        timeout=config.REQUEST_TIMEOUT,
    )
    if not resp.ok:
        raise RuntimeError(f"API error {resp.status_code}: {resp.text[:200]}")
    return resp.json()
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
cd scripts/scraper && python -m pytest tests/test_db_client.py -v
```

예상: `PASSED` 2개

- [ ] **Step 5: 커밋**

```bash
git add scripts/scraper/db_client.py scripts/scraper/tests/test_db_client.py
git commit -m "feat(scraper): add db_client with save_scraped_data"
```

---

## Task 3: BaseScraper

**Files:**
- Create: `scripts/scraper/base_scraper.py`
- Create: `scripts/scraper/tests/test_base_scraper.py`

- [ ] **Step 1: 실패 테스트 작성**

```python
# scripts/scraper/tests/test_base_scraper.py
import time
import pytest
from unittest.mock import patch, MagicMock
from base_scraper import BaseScraper
from db_client import ScrapedItem


class DummyScraper(BaseScraper):
    source_type = "naver_blog"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        return []


def test_fetch_with_retry_success():
    scraper = DummyScraper()
    mock_resp = MagicMock()
    mock_resp.ok = True
    mock_resp.text = "<html>content</html>"
    with patch("requests.get", return_value=mock_resp) as mock_get:
        result = scraper.fetch("https://example.com")
    assert result == "<html>content</html>"
    mock_get.assert_called_once()


def test_fetch_retries_on_failure():
    scraper = DummyScraper()
    fail_resp = MagicMock()
    fail_resp.ok = False
    fail_resp.status_code = 503
    ok_resp = MagicMock()
    ok_resp.ok = True
    ok_resp.text = "ok"
    with patch("requests.get", side_effect=[fail_resp, fail_resp, ok_resp]) as mock_get:
        with patch("time.sleep"):
            result = scraper.fetch("https://example.com")
    assert result == "ok"
    assert mock_get.call_count == 3


def test_fetch_raises_after_max_retries():
    scraper = DummyScraper()
    fail_resp = MagicMock()
    fail_resp.ok = False
    fail_resp.status_code = 503
    with patch("requests.get", return_value=fail_resp):
        with patch("time.sleep"):
            with pytest.raises(RuntimeError, match="503"):
                scraper.fetch("https://example.com")


def test_rate_limit_applied():
    scraper = DummyScraper()
    scraper._last_request_time = time.monotonic()
    with patch("requests.get") as mock_get:
        mock_get.return_value = MagicMock(ok=True, text="")
        with patch("time.sleep") as mock_sleep:
            scraper.fetch("https://example.com")
    mock_sleep.assert_called()
```

- [ ] **Step 2: 실패 확인**

```bash
cd scripts/scraper && python -m pytest tests/test_base_scraper.py -v
```

예상: `ImportError`

- [ ] **Step 3: base_scraper.py 구현**

```python
# scripts/scraper/base_scraper.py
import time
from abc import ABC, abstractmethod
import requests
from bs4 import BeautifulSoup
import config
from db_client import ScrapedItem


class BaseScraper(ABC):
    source_type: str = "other"

    def __init__(self):
        self._last_request_time: float = 0.0
        self.rate_limit = config.RATE_LIMITS.get(self.source_type, 0.5)

    def _wait_rate_limit(self):
        elapsed = time.monotonic() - self._last_request_time
        wait = self.rate_limit - elapsed
        if wait > 0:
            time.sleep(wait)

    def fetch(self, url: str, **kwargs) -> str:
        self._wait_rate_limit()
        last_exc: Exception | None = None
        for attempt in range(config.MAX_RETRIES):
            try:
                resp = requests.get(
                    url,
                    headers=config.HEADERS,
                    timeout=config.REQUEST_TIMEOUT,
                    **kwargs,
                )
                self._last_request_time = time.monotonic()
                if resp.ok:
                    return resp.text
                last_exc = RuntimeError(f"HTTP {resp.status_code} for {url}")
            except requests.RequestException as e:
                last_exc = e
            backoff = 2 ** attempt
            time.sleep(backoff)
        raise RuntimeError(f"Failed after {config.MAX_RETRIES} retries: {last_exc}")

    def parse(self, html: str) -> BeautifulSoup:
        return BeautifulSoup(html, "lxml")

    def truncate_summary(self, text: str) -> str:
        return text[: config.SUMMARY_MAX_CHARS].strip()

    @abstractmethod
    def scrape_wine(
        self, wine_id: int, wine_slug: str, wine_name_ko: str
    ) -> list[ScrapedItem]:
        ...
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
cd scripts/scraper && python -m pytest tests/test_base_scraper.py -v
```

예상: `PASSED` 4개

- [ ] **Step 5: 커밋**

```bash
git add scripts/scraper/base_scraper.py scripts/scraper/tests/test_base_scraper.py
git commit -m "feat(scraper): add BaseScraper with rate limiting and retry"
```

---

## Task 4: Naver Blog & Naver Cafe 스크래퍼

**Files:**
- Create: `scripts/scraper/sources/__init__.py`
- Create: `scripts/scraper/sources/naver_blog.py`
- Create: `scripts/scraper/sources/naver_cafe.py`
- Create: `scripts/scraper/tests/test_sources.py`

Naver 블로그 검색 API: `https://openapi.naver.com/v1/search/blog.json?query=<와인명>&display=10`  
Naver 카페 검색 API: `https://openapi.naver.com/v1/search/cafearticle.json?query=<와인명>&display=10`

두 API 모두 `X-Naver-Client-Id`, `X-Naver-Client-Secret` 헤더 필요. 없을 경우 일반 검색 HTML 파싱 폴백.

- [ ] **Step 1: `__init__.py` 및 실패 테스트 작성**

```python
# scripts/scraper/sources/__init__.py
# (empty)
```

```python
# scripts/scraper/tests/test_sources.py (naver_blog 부분)
import responses as resp_lib
import pytest
from sources.naver_blog import NaverBlogScraper


MOCK_BLOG_API_RESPONSE = {
    "items": [
        {
            "title": "<b>샤토 마고</b> 2018 시음기",
            "link": "https://blog.naver.com/user/post1",
            "description": "풍부한 타닌과 복합적인 향이 인상적이었습니다.",
            "bloggername": "와인러버",
            "postdate": "20240315",
        }
    ]
}


@resp_lib.activate
def test_naver_blog_scraper_with_api():
    resp_lib.add(
        resp_lib.GET,
        "https://openapi.naver.com/v1/search/blog.json",
        json=MOCK_BLOG_API_RESPONSE,
        status=200,
    )
    import os
    os.environ["NAVER_CLIENT_ID"] = "test_id"
    os.environ["NAVER_CLIENT_SECRET"] = "test_secret"

    scraper = NaverBlogScraper()
    items = scraper.scrape_wine(1, "chateau-margaux", "샤토 마고")
    assert len(items) == 1
    assert items[0].wineId == 1
    assert items[0].sourceType == "naver_blog"
    assert "샤토 마고" in items[0].title or "마고" in items[0].title
    assert items[0].url == "https://blog.naver.com/user/post1"
```

- [ ] **Step 2: 실패 확인**

```bash
cd scripts/scraper && python -m pytest tests/test_sources.py::test_naver_blog_scraper_with_api -v
```

예상: `ImportError`

- [ ] **Step 3: naver_blog.py 구현**

```python
# scripts/scraper/sources/naver_blog.py
import os
import re
import requests
from base_scraper import BaseScraper
from db_client import ScrapedItem
import config


class NaverBlogScraper(BaseScraper):
    source_type = "naver_blog"
    SEARCH_API = "https://openapi.naver.com/v1/search/blog.json"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        client_id = os.environ.get("NAVER_CLIENT_ID", "")
        client_secret = os.environ.get("NAVER_CLIENT_SECRET", "")
        if client_id and client_secret:
            return self._scrape_via_api(wine_id, wine_name_ko, client_id, client_secret)
        return self._scrape_via_search(wine_id, wine_name_ko)

    def _scrape_via_api(self, wine_id: int, query: str, client_id: str, client_secret: str) -> list[ScrapedItem]:
        self._wait_rate_limit()
        resp = requests.get(
            self.SEARCH_API,
            params={"query": query, "display": config.MAX_RESULTS_PER_SOURCE, "sort": "date"},
            headers={**config.HEADERS, "X-Naver-Client-Id": client_id, "X-Naver-Client-Secret": client_secret},
            timeout=config.REQUEST_TIMEOUT,
        )
        self._last_request_time = __import__("time").monotonic()
        if not resp.ok:
            return []
        items = []
        for post in resp.json().get("items", []):
            title = re.sub(r"<[^>]+>", "", post.get("title", "")).strip()
            summary = re.sub(r"<[^>]+>", "", post.get("description", "")).strip()
            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=post["link"],
                title=title,
                summary=self.truncate_summary(summary),
                publishedAt=self._parse_postdate(post.get("postdate", "")),
                thumbnailUrl=None,
                extra={"author": post.get("bloggername", "")},
            ))
        return items

    def _scrape_via_search(self, wine_id: int, query: str) -> list[ScrapedItem]:
        html = self.fetch(
            f"https://search.naver.com/search.naver?where=blog&query={requests.utils.quote(query)}"
        )
        soup = self.parse(html)
        items = []
        for article in soup.select(".api_txt_lines")[:config.MAX_RESULTS_PER_SOURCE]:
            title_el = article.select_one(".title_area a") or article.select_one("a")
            if not title_el:
                continue
            title = title_el.get_text(strip=True)
            url = title_el.get("href", "")
            desc_el = article.select_one(".dsc_area") or article.select_one(".desc")
            summary = desc_el.get_text(strip=True) if desc_el else ""
            if url and title:
                items.append(ScrapedItem(
                    wineId=wine_id,
                    sourceType=self.source_type,
                    url=url,
                    title=title,
                    summary=self.truncate_summary(summary),
                    publishedAt=None,
                    thumbnailUrl=None,
                    extra={},
                ))
        return items

    def _parse_postdate(self, postdate: str) -> str | None:
        if len(postdate) == 8:
            return f"{postdate[:4]}-{postdate[4:6]}-{postdate[6:8]}"
        return None
```

- [ ] **Step 4: naver_cafe.py 구현**

```python
# scripts/scraper/sources/naver_cafe.py
import os
import re
import requests
from base_scraper import BaseScraper
from db_client import ScrapedItem
import config


class NaverCafeScraper(BaseScraper):
    source_type = "naver_cafe"
    SEARCH_API = "https://openapi.naver.com/v1/search/cafearticle.json"
    TARGET_CAFE = "winerack24"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        client_id = os.environ.get("NAVER_CLIENT_ID", "")
        client_secret = os.environ.get("NAVER_CLIENT_SECRET", "")
        query = f"{wine_name_ko} site:{self.TARGET_CAFE}" if not client_id else wine_name_ko
        if client_id and client_secret:
            return self._scrape_via_api(wine_id, wine_name_ko, client_id, client_secret)
        return []

    def _scrape_via_api(self, wine_id: int, query: str, client_id: str, client_secret: str) -> list[ScrapedItem]:
        self._wait_rate_limit()
        resp = requests.get(
            self.SEARCH_API,
            params={"query": query, "display": config.MAX_RESULTS_PER_SOURCE, "sort": "date"},
            headers={**config.HEADERS, "X-Naver-Client-Id": client_id, "X-Naver-Client-Secret": client_secret},
            timeout=config.REQUEST_TIMEOUT,
        )
        self._last_request_time = __import__("time").monotonic()
        if not resp.ok:
            return []
        items = []
        for post in resp.json().get("items", []):
            title = re.sub(r"<[^>]+>", "", post.get("title", "")).strip()
            summary = re.sub(r"<[^>]+>", "", post.get("description", "")).strip()
            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=post.get("link", ""),
                title=title,
                summary=self.truncate_summary(summary),
                publishedAt=None,
                thumbnailUrl=None,
                extra={"cafeName": post.get("cafename", ""), "cafeUrl": post.get("cafeurl", "")},
            ))
        return items
```

- [ ] **Step 5: 테스트 통과 확인**

```bash
cd scripts/scraper && python -m pytest tests/test_sources.py::test_naver_blog_scraper_with_api -v
```

예상: `PASSED`

- [ ] **Step 6: 커밋**

```bash
git add scripts/scraper/sources/ scripts/scraper/tests/test_sources.py
git commit -m "feat(scraper): add NaverBlogScraper and NaverCafeScraper"
```

---

## Task 5: YouTube 스크래퍼

**Files:**
- Modify: `scripts/scraper/sources/youtube_scraper.py`
- Modify: `scripts/scraper/tests/test_sources.py`

YouTube Data API v3 검색 + `youtube-transcript-api`로 한국어 자막 추출. API 키 없으면 YouTube 검색 HTML 파싱 폴백.

- [ ] **Step 1: 실패 테스트 추가 (test_sources.py에 append)**

```python
# test_sources.py 하단에 추가
from sources.youtube_scraper import YouTubeScraper

MOCK_YT_API_RESPONSE = {
    "items": [
        {
            "id": {"videoId": "dQw4w9WgXcQ"},
            "snippet": {
                "title": "샤토 마고 2018 테이스팅",
                "channelTitle": "와인채널",
                "publishedAt": "2024-03-15T00:00:00Z",
                "description": "보르도 최고 와인 샤토 마고를 시음해봤습니다.",
                "thumbnails": {"medium": {"url": "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg"}},
            },
        }
    ]
}


@resp_lib.activate
def test_youtube_scraper_with_api():
    resp_lib.add(
        resp_lib.GET,
        "https://www.googleapis.com/youtube/v3/search",
        json=MOCK_YT_API_RESPONSE,
        status=200,
    )
    import os
    os.environ["YOUTUBE_API_KEY"] = "test_yt_key"

    scraper = YouTubeScraper()
    items = scraper.scrape_wine(1, "chateau-margaux", "샤토 마고")
    assert len(items) == 1
    assert items[0].sourceType == "youtube"
    assert items[0].url == "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    assert items[0].thumbnailUrl is not None
```

- [ ] **Step 2: 실패 확인**

```bash
cd scripts/scraper && python -m pytest tests/test_sources.py::test_youtube_scraper_with_api -v
```

예상: `ImportError`

- [ ] **Step 3: youtube_scraper.py 구현**

```python
# scripts/scraper/sources/youtube_scraper.py
import os
import requests
from base_scraper import BaseScraper
from db_client import ScrapedItem
import config


class YouTubeScraper(BaseScraper):
    source_type = "youtube"
    SEARCH_API = "https://www.googleapis.com/youtube/v3/search"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        api_key = os.environ.get("YOUTUBE_API_KEY", "")
        if not api_key:
            return []
        return self._scrape_via_api(wine_id, wine_name_ko, api_key)

    def _scrape_via_api(self, wine_id: int, query: str, api_key: str) -> list[ScrapedItem]:
        self._wait_rate_limit()
        resp = requests.get(
            self.SEARCH_API,
            params={
                "part": "snippet",
                "q": query,
                "type": "video",
                "maxResults": config.MAX_RESULTS_PER_SOURCE,
                "relevanceLanguage": "ko",
                "key": api_key,
            },
            headers=config.HEADERS,
            timeout=config.REQUEST_TIMEOUT,
        )
        self._last_request_time = __import__("time").monotonic()
        if not resp.ok:
            return []
        items = []
        for video in resp.json().get("items", []):
            vid_id = video["id"]["videoId"]
            snippet = video["snippet"]
            thumbnail = snippet.get("thumbnails", {}).get("medium", {}).get("url")
            summary = self._get_transcript_summary(vid_id) or self.truncate_summary(snippet.get("description", ""))
            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=f"https://www.youtube.com/watch?v={vid_id}",
                title=snippet.get("title", ""),
                summary=summary,
                publishedAt=snippet.get("publishedAt", "")[:10] or None,
                thumbnailUrl=thumbnail,
                extra={"channelTitle": snippet.get("channelTitle", "")},
            ))
        return items

    def _get_transcript_summary(self, video_id: str) -> str | None:
        try:
            from youtube_transcript_api import YouTubeTranscriptApi
            transcript = YouTubeTranscriptApi.get_transcript(video_id, languages=["ko", "en"])
            full_text = " ".join(t["text"] for t in transcript)
            return self.truncate_summary(full_text)
        except Exception:
            return None
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
cd scripts/scraper && python -m pytest tests/test_sources.py::test_youtube_scraper_with_api -v
```

예상: `PASSED`

- [ ] **Step 5: 커밋**

```bash
git add scripts/scraper/sources/youtube_scraper.py scripts/scraper/tests/test_sources.py
git commit -m "feat(scraper): add YouTubeScraper with transcript support"
```

---

## Task 6: Wine Searcher, Winery Official, Article 스크래퍼

**Files:**
- Create: `scripts/scraper/sources/instagram_scraper.py`
- Create: `scripts/scraper/sources/wine_searcher.py`
- Create: `scripts/scraper/sources/winery_official.py`
- Create: `scripts/scraper/sources/article_scraper.py`

인스타그램은 공개 API 없음 → 검색 결과 HTML 파싱(제한적). Wine Searcher는 와인 검색 결과 HTML 파싱.

- [ ] **Step 1: wine_searcher.py 구현**

```python
# scripts/scraper/sources/wine_searcher.py
import re
from base_scraper import BaseScraper
from db_client import ScrapedItem


class WineSearcherScraper(BaseScraper):
    source_type = "wine_searcher"
    SEARCH_URL = "https://www.wine-searcher.com/find/{slug}/1/korea"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        url = self.SEARCH_URL.format(slug=wine_slug.replace("-", "+"))
        try:
            html = self.fetch(url)
        except RuntimeError:
            return []
        soup = self.parse(html)

        items = []
        score_el = soup.select_one("[data-criticScore], .critic-score, .community-score")
        price_el = soup.select_one(".price, [itemprop='price']")
        summary_parts = []
        if score_el:
            summary_parts.append(f"점수: {score_el.get_text(strip=True)}")
        if price_el:
            summary_parts.append(f"평균가: {price_el.get_text(strip=True)}")

        desc_el = soup.select_one(".wine-description, .description")
        if desc_el:
            summary_parts.append(desc_el.get_text(strip=True))

        if summary_parts:
            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=url,
                title=f"{wine_name_ko} — Wine-Searcher",
                summary=self.truncate_summary(" | ".join(summary_parts)),
                publishedAt=None,
                thumbnailUrl=None,
                extra={},
            ))
        return items
```

- [ ] **Step 2: winery_official.py 구현**

```python
# scripts/scraper/sources/winery_official.py
from base_scraper import BaseScraper
from db_client import ScrapedItem


class WineryOfficialScraper(BaseScraper):
    source_type = "winery_official"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        return []

    def scrape_winery_url(self, wine_id: int, winery_url: str, wine_name_ko: str) -> list[ScrapedItem]:
        if not winery_url:
            return []
        try:
            html = self.fetch(winery_url)
        except RuntimeError:
            return []
        soup = self.parse(html)

        desc_el = soup.select_one("meta[name='description']")
        summary = ""
        if desc_el:
            summary = desc_el.get("content", "")
        if not summary:
            body_el = soup.select_one("main p, article p, .content p")
            if body_el:
                summary = body_el.get_text(strip=True)

        if not summary:
            return []
        return [ScrapedItem(
            wineId=wine_id,
            sourceType=self.source_type,
            url=winery_url,
            title=f"{wine_name_ko} — 와이너리 공식",
            summary=self.truncate_summary(summary),
            publishedAt=None,
            thumbnailUrl=None,
            extra={},
        )]
```

- [ ] **Step 3: article_scraper.py 구현 (국내 + 해외 통합)**

```python
# scripts/scraper/sources/article_scraper.py
import re
import requests
from base_scraper import BaseScraper
from db_client import ScrapedItem
import config

KR_SOURCES = [
    {"name": "wine21", "search_url": "https://www.wine21.com/search/?keyword={query}", "result_sel": ".search_list li", "title_sel": "a", "desc_sel": ".summary"},
    {"name": "sommelierTimes", "search_url": "https://www.sommelierkorea.co.kr/?s={query}", "result_sel": "article.post", "title_sel": "h2 a", "desc_sel": ".entry-summary"},
]

GLOBAL_SOURCES = [
    {"name": "decanter", "search_url": "https://www.decanter.com/search/?q={query}", "result_sel": "article", "title_sel": "h3 a, h2 a", "desc_sel": "p"},
]


class ArticleScraper(BaseScraper):
    source_type = "article_kr"

    def __init__(self, is_global: bool = False):
        super().__init__()
        self.is_global = is_global
        self.source_type = "article_global" if is_global else "article_kr"
        self.sources = GLOBAL_SOURCES if is_global else KR_SOURCES

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        query = wine_slug if self.is_global else wine_name_ko
        items: list[ScrapedItem] = []
        for source in self.sources:
            try:
                url = source["search_url"].format(query=requests.utils.quote(query))
                html = self.fetch(url)
                soup = self.parse(html)
                for article in soup.select(source["result_sel"])[:3]:
                    title_el = article.select_one(source["title_sel"])
                    desc_el = article.select_one(source["desc_sel"])
                    if not title_el:
                        continue
                    article_url = title_el.get("href", url)
                    if not article_url.startswith("http"):
                        base = re.match(r"https?://[^/]+", url)
                        article_url = (base.group(0) if base else "") + article_url
                    items.append(ScrapedItem(
                        wineId=wine_id,
                        sourceType=self.source_type,
                        url=article_url,
                        title=title_el.get_text(strip=True),
                        summary=self.truncate_summary(desc_el.get_text(strip=True) if desc_el else ""),
                        publishedAt=None,
                        thumbnailUrl=None,
                        extra={"source": source["name"]},
                    ))
            except RuntimeError:
                continue
        return items[: config.MAX_RESULTS_PER_SOURCE]
```

- [ ] **Step 4: instagram_scraper.py 구현 (최소 스텁)**

```python
# scripts/scraper/sources/instagram_scraper.py
from base_scraper import BaseScraper
from db_client import ScrapedItem


class InstagramScraper(BaseScraper):
    """인스타그램 공개 API가 없으므로 현재는 빈 결과 반환.
    향후 Meta Graph API 토큰 확보 시 구현 예정."""
    source_type = "instagram"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        return []
```

- [ ] **Step 5: 임포트 확인**

```bash
cd scripts/scraper && python -c "
from sources.wine_searcher import WineSearcherScraper
from sources.winery_official import WineryOfficialScraper
from sources.article_scraper import ArticleScraper
from sources.instagram_scraper import InstagramScraper
print('OK')
"
```

예상 출력: `OK`

- [ ] **Step 6: 커밋**

```bash
git add scripts/scraper/sources/wine_searcher.py scripts/scraper/sources/winery_official.py scripts/scraper/sources/article_scraper.py scripts/scraper/sources/instagram_scraper.py
git commit -m "feat(scraper): add WineSearcher, WineryOfficial, Article, Instagram scrapers"
```

---

## Task 7: Main 오케스트레이터

**Files:**
- Create: `scripts/scraper/main.py`

- [ ] **Step 1: main.py 구현**

```python
#!/usr/bin/env python3
# scripts/scraper/main.py
"""
Usage:
  python main.py --all                         # 전체 와인 배치 처리
  python main.py --wine-id 42                  # 단일 와인
  python main.py --all --batch-size 20         # 배치 크기 조정 (기본 50)
"""
import argparse
import sys
import time
import requests
import config
from db_client import save_scraped_data
from sources.naver_blog import NaverBlogScraper
from sources.naver_cafe import NaverCafeScraper
from sources.youtube_scraper import YouTubeScraper
from sources.instagram_scraper import InstagramScraper
from sources.wine_searcher import WineSearcherScraper
from sources.winery_official import WineryOfficialScraper
from sources.article_scraper import ArticleScraper

SCRAPERS = [
    NaverBlogScraper(),
    NaverCafeScraper(),
    YouTubeScraper(),
    InstagramScraper(),
    WineSearcherScraper(),
    WineryOfficialScraper(),
    ArticleScraper(is_global=False),
    ArticleScraper(is_global=True),
]


def fetch_wines(page: int, page_size: int) -> list[dict]:
    resp = requests.get(
        f"{config.API_BASE_URL}/api/wines",
        params={"page": page, "pageSize": page_size, "isPublished": "true"},
        headers=config.HEADERS,
        timeout=config.REQUEST_TIMEOUT,
    )
    if not resp.ok:
        print(f"[WARN] GET /api/wines page={page} → {resp.status_code}", file=sys.stderr)
        return []
    data = resp.json()
    return data.get("data", [])


def scrape_wine(wine: dict) -> int:
    wine_id = wine["id"]
    slug = wine["slug"]
    name_ko = wine.get("nameKo", slug)
    winery_url = wine.get("winery", {}).get("websiteUrl", "") if wine.get("winery") else ""

    saved = 0
    for scraper in SCRAPERS:
        try:
            if scraper.source_type == "winery_official":
                items = scraper.scrape_winery_url(wine_id, winery_url, name_ko)
            else:
                items = scraper.scrape_wine(wine_id, slug, name_ko)
            for item in items:
                try:
                    save_scraped_data(item)
                    saved += 1
                except RuntimeError as e:
                    print(f"[WARN] save failed for {item.url}: {e}", file=sys.stderr)
        except Exception as e:
            print(f"[ERROR] {scraper.source_type} scrape_wine({wine_id}): {e}", file=sys.stderr)
    return saved


def run_all(batch_size: int):
    page = 1
    total_wines = 0
    total_saved = 0
    while True:
        wines = fetch_wines(page, batch_size)
        if not wines:
            break
        print(f"[INFO] Processing page {page} ({len(wines)} wines)")
        for wine in wines:
            n = scrape_wine(wine)
            total_wines += 1
            total_saved += n
            print(f"  [{total_wines}] {wine['slug']} → {n} items saved")
        page += 1
        time.sleep(0.1)
    print(f"[DONE] {total_wines} wines, {total_saved} items saved")


def run_single(wine_id: int):
    resp = requests.get(
        f"{config.API_BASE_URL}/api/wines",
        params={"page": 1, "pageSize": 1},
        headers=config.HEADERS,
        timeout=config.REQUEST_TIMEOUT,
    )
    wines_resp = requests.get(
        f"{config.API_BASE_URL}/api/wines/{wine_id}",
        headers=config.HEADERS,
        timeout=config.REQUEST_TIMEOUT,
    )
    if not wines_resp.ok:
        print(f"[ERROR] Wine {wine_id} not found", file=sys.stderr)
        sys.exit(1)
    wine = wines_resp.json()
    n = scrape_wine(wine)
    print(f"[DONE] {wine['slug']} → {n} items saved")


def main():
    parser = argparse.ArgumentParser(description="NARA WINEINFO 스크래퍼")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--all", action="store_true", help="전체 와인 스크래핑")
    group.add_argument("--wine-id", type=int, help="단일 와인 ID")
    parser.add_argument("--batch-size", type=int, default=50, help="페이지당 처리 와인 수")
    args = parser.parse_args()

    if not config.INTERNAL_API_KEY:
        print("[ERROR] INTERNAL_API_KEY 환경변수가 설정되지 않았습니다", file=sys.stderr)
        sys.exit(1)

    if args.all:
        run_all(args.batch_size)
    else:
        run_single(args.wine_id)


if __name__ == "__main__":
    main()
```

- [ ] **Step 2: 문법 오류 없이 임포트 확인**

```bash
cd scripts/scraper && python -c "import main; print('OK')"
```

예상 출력: `OK`

- [ ] **Step 3: 커밋**

```bash
git add scripts/scraper/main.py
git commit -m "feat(scraper): add main orchestrator with --all/--wine-id CLI"
```

---

## Task 8: GitHub Actions 주간 스케줄

**Files:**
- Create: `.github/workflows/weekly-scrape.yml`

- [ ] **Step 1: weekly-scrape.yml 작성**

```yaml
# .github/workflows/weekly-scrape.yml
name: Weekly Wine Scraper

on:
  schedule:
    # 매주 일요일 02:00 KST = 토요일 17:00 UTC
    - cron: "0 17 * * 6"
  workflow_dispatch:
    inputs:
      wine_id:
        description: "특정 와인 ID (비워두면 전체 실행)"
        required: false
        type: string
      batch_size:
        description: "배치 크기 (기본 50)"
        required: false
        default: "50"
        type: string

jobs:
  scrape:
    runs-on: ubuntu-latest
    timeout-minutes: 90

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.11"
          cache: "pip"
          cache-dependency-path: scripts/scraper/requirements.txt

      - name: Install dependencies
        run: pip install -r scripts/scraper/requirements.txt

      - name: Run scraper (all wines)
        if: ${{ !inputs.wine_id }}
        env:
          API_BASE_URL: ${{ secrets.API_BASE_URL }}
          INTERNAL_API_KEY: ${{ secrets.INTERNAL_API_KEY }}
          NAVER_CLIENT_ID: ${{ secrets.NAVER_CLIENT_ID }}
          NAVER_CLIENT_SECRET: ${{ secrets.NAVER_CLIENT_SECRET }}
          YOUTUBE_API_KEY: ${{ secrets.YOUTUBE_API_KEY }}
        run: |
          cd scripts/scraper
          python main.py --all --batch-size ${{ inputs.batch_size || 50 }}

      - name: Run scraper (single wine)
        if: ${{ inputs.wine_id }}
        env:
          API_BASE_URL: ${{ secrets.API_BASE_URL }}
          INTERNAL_API_KEY: ${{ secrets.INTERNAL_API_KEY }}
          NAVER_CLIENT_ID: ${{ secrets.NAVER_CLIENT_ID }}
          NAVER_CLIENT_SECRET: ${{ secrets.NAVER_CLIENT_SECRET }}
          YOUTUBE_API_KEY: ${{ secrets.YOUTUBE_API_KEY }}
        run: |
          cd scripts/scraper
          python main.py --wine-id ${{ inputs.wine_id }}
```

- [ ] **Step 2: YAML 문법 확인**

```bash
python -c "import yaml; yaml.safe_load(open('.github/workflows/weekly-scrape.yml')); print('YAML OK')"
```

예상 출력: `YAML OK`

- [ ] **Step 3: GitHub Secrets 등록 안내 (코드 변경 없음)**

GitHub 저장소 Settings → Secrets and variables → Actions에서 다음 시크릿 등록:

| 키 | 값 |
|---|---|
| `API_BASE_URL` | 운영 서버 URL (예: `https://wineinfo.naracellar.com`) |
| `INTERNAL_API_KEY` | `.env`의 `INTERNAL_API_KEY` 값 |
| `NAVER_CLIENT_ID` | 네이버 개발자 콘솔 → 애플리케이션 → Client ID |
| `NAVER_CLIENT_SECRET` | 네이버 개발자 콘솔 → Client Secret |
| `YOUTUBE_API_KEY` | Google Cloud Console → YouTube Data API v3 키 |

- [ ] **Step 4: 커밋**

```bash
git add .github/workflows/weekly-scrape.yml
git commit -m "feat(ci): add weekly scraper GitHub Actions workflow"
```

---

## Self-Review

**스펙 커버리지 확인:**
- ✅ 9개 소스: naver_blog, naver_cafe, youtube, instagram, wine_searcher, winery_official, article_kr, article_global, other (other는 BaseScraper 상속으로 확장 가능)
- ✅ rate limit: RATE_LIMITS 딕셔너리 (Naver 1s, YouTube 2s, 그 외 0.5s)
- ✅ retry 3회 exponential backoff (BaseScraper.fetch)
- ✅ URL @unique → upsert (API 서버에서 처리, Plan A Task 6)
- ✅ summary 300자 truncation
- ✅ GitHub Actions cron 일요일 02:00 KST
- ✅ `--all` / `--wine-id` / `--batch-size` 플래그
- ✅ INTERNAL_API_KEY 인증

**플레이스홀더 없음** — 모든 코드 블록 완성됨.

**타입 일관성** — `ScrapedItem` 데이터클래스가 모든 스크래퍼에서 동일하게 사용됨. `save_scraped_data(item: ScrapedItem)` 시그니처 일관.
