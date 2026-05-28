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
                url=post.get("link", ""),
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
