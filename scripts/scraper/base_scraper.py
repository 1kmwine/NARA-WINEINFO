import time
from abc import ABC, abstractmethod
from typing import Optional
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
        last_exc: Optional[Exception] = None
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
