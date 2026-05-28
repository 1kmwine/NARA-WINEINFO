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
