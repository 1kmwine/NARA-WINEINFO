# scripts/scraper/tests/test_sources.py
import os
import responses as resp_lib
import pytest
from sources.naver_blog import NaverBlogScraper
from sources.youtube_scraper import YouTubeScraper


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
def test_naver_blog_scraper_with_api(monkeypatch):
    resp_lib.add(
        resp_lib.GET,
        "https://openapi.naver.com/v1/search/blog.json",
        json=MOCK_BLOG_API_RESPONSE,
        status=200,
    )
    monkeypatch.setenv("NAVER_CLIENT_ID", "test_id")
    monkeypatch.setenv("NAVER_CLIENT_SECRET", "test_secret")

    scraper = NaverBlogScraper()
    items = scraper.scrape_wine(1, "chateau-margaux", "샤토 마고")
    assert len(items) == 1
    assert items[0].wineId == 1
    assert items[0].sourceType == "naver_blog"
    assert "샤토 마고" in items[0].title or "마고" in items[0].title
    assert items[0].url == "https://blog.naver.com/user/post1"


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
def test_youtube_scraper_with_api(monkeypatch):
    resp_lib.add(
        resp_lib.GET,
        "https://www.googleapis.com/youtube/v3/search",
        json=MOCK_YT_API_RESPONSE,
        status=200,
    )
    monkeypatch.setenv("YOUTUBE_API_KEY", "test_yt_key")

    scraper = YouTubeScraper()
    items = scraper.scrape_wine(1, "chateau-margaux", "샤토 마고")
    assert len(items) == 1
    assert items[0].sourceType == "youtube"
    assert items[0].url == "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    assert items[0].thumbnailUrl is not None
