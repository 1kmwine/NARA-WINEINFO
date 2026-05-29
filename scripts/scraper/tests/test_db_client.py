# scripts/scraper/tests/test_db_client.py
import responses as resp_lib
import pytest
from db_client import save_scraped_data, ScrapedItem

@resp_lib.activate
def test_save_scraped_data_success():
    # API returns { created, updated, skipped } — matches route.ts response shape
    resp_lib.add(
        resp_lib.POST,
        "http://localhost:3000/api/internal/scrape",
        json={"created": 1, "updated": 0, "skipped": 0},
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
    assert result["created"] == 1

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
