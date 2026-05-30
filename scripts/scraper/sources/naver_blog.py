# scripts/scraper/sources/naver_blog.py
import requests
from typing import List, Optional
from base_scraper import BaseScraper
from db_client import ScrapedItem
import config

DDG_HTML = "https://html.duckduckgo.com/html/"


class NaverBlogScraper(BaseScraper):
    source_type = "naver_blog"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> List[ScrapedItem]:
        return self._scrape_via_ddg(wine_id, wine_name_ko)

    def _scrape_via_ddg(self, wine_id: int, query: str) -> List[ScrapedItem]:
        encoded = requests.utils.quote(query)
        url = f"{DDG_HTML}?q=site%3Ablog.naver.com+{encoded}&kl=kr-kr"
        html = self.fetch(url)
        soup = self.parse(html)
        items: List[ScrapedItem] = []
        for result in soup.select(".result")[:config.MAX_RESULTS_PER_SOURCE]:
            title_el = result.select_one(".result__title a.result__a")
            if not title_el:
                continue
            title = title_el.get_text(strip=True)
            href = title_el.get("href", "")
            # DuckDuckGo wraps URLs in a redirect; prefer the uddg param if present
            result_url = _unwrap_ddg_url(href)
            if not result_url or not title:
                continue
            snippet_el = result.select_one(".result__snippet")
            summary = snippet_el.get_text(strip=True) if snippet_el else ""
            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=result_url,
                title=title,
                summary=self.truncate_summary(summary),
                publishedAt=None,
                thumbnailUrl=None,
                extra={},
            ))
        return items


def _unwrap_ddg_url(href: str) -> Optional[str]:
    """Extract the real destination URL from a DuckDuckGo redirect href."""
    if not href:
        return None
    # DuckDuckGo HTML links look like //duckduckgo.com/l/?uddg=<encoded-url>&...
    if "uddg=" in href:
        try:
            from urllib.parse import urlparse, parse_qs, unquote
            parsed = urlparse(href if href.startswith("http") else "https:" + href)
            uddg = parse_qs(parsed.query).get("uddg", [None])[0]
            if uddg:
                return unquote(uddg)
        except Exception:
            pass
    # Fallback: return href as-is if it already looks like a real URL
    if href.startswith("http"):
        return href
    return None
