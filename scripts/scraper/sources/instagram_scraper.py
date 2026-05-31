# scripts/scraper/sources/instagram_scraper.py
import requests
from urllib.parse import quote, urlparse, parse_qs, unquote
from typing import List, Optional
from base_scraper import BaseScraper
from db_client import ScrapedItem
import config

DDG_HTML = "https://html.duckduckgo.com/html/"


class InstagramScraper(BaseScraper):
    source_type = "instagram"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> List[ScrapedItem]:
        items = self._scrape_via_ddg(wine_id, wine_name_ko)
        return items

    def _scrape_via_ddg(self, wine_id: int, wine_name_ko: str) -> List[ScrapedItem]:
        q = quote(f"site:instagram.com {wine_name_ko} 와인")
        url = f"{DDG_HTML}?q={q}&kl=kr-kr"
        try:
            html = self.fetch(url)
        except Exception:
            return []

        soup = self.parse(html)
        items: List[ScrapedItem] = []
        for result in soup.select(".result")[:config.MAX_RESULTS_PER_SOURCE]:
            title_el = result.select_one(".result__title a.result__a, a.result__a")
            if not title_el:
                continue
            title = title_el.get_text(strip=True)
            href = _unwrap_ddg_url(title_el.get("href", ""))
            if not title or not href or "instagram.com" not in href:
                continue
            snippet_el = result.select_one(".result__snippet")
            summary = snippet_el.get_text(strip=True) if snippet_el else ""
            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=href,
                title=title,
                summary=self.truncate_summary(summary) or None,
                publishedAt=None,
                thumbnailUrl=None,
                extra={},
            ))
        return items


def _unwrap_ddg_url(href: str) -> Optional[str]:
    if not href:
        return None
    if "uddg=" in href:
        try:
            parsed = urlparse(href if href.startswith("http") else "https:" + href)
            uddg = parse_qs(parsed.query).get("uddg", [None])[0]
            if uddg:
                return unquote(uddg)
        except Exception:
            pass
    if href.startswith("http"):
        return href
    return None
