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

    def scrape_wine(self, wine_id: int, _wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        client_id = os.environ.get("NAVER_CLIENT_ID", "")
        client_secret = os.environ.get("NAVER_CLIENT_SECRET", "")
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
            if self.TARGET_CAFE and post.get("cafename", "").lower() != self.TARGET_CAFE.lower():
                continue
            title = re.sub(r"<[^>]+>", "", post.get("title", "")).strip()
            summary = re.sub(r"<[^>]+>", "", post.get("description", "")).strip()
            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=post.get("link", ""),
                title=title,
                summary=self.truncate_summary(summary),
                publishedAt=self._parse_pubdate(post.get("pubDate", "")),
                thumbnailUrl=None,
                extra={"cafeName": post.get("cafename", ""), "cafeUrl": post.get("cafeurl", "")},
            ))
        return items

    def _parse_pubdate(self, pubdate: str) -> str | None:
        if not pubdate:
            return None
        try:
            from email.utils import parsedate
            parsed = parsedate(pubdate)
            if parsed:
                return f"{parsed[0]:04d}-{parsed[1]:02d}-{parsed[2]:02d}"
        except Exception:
            pass
        return None
