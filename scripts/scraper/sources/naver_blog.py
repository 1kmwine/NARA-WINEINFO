# scripts/scraper/sources/naver_blog.py
import requests
from typing import List, Optional
from base_scraper import BaseScraper
from db_client import ScrapedItem
from claude_search_client import search_wine_claude
import config

DDG_HTML = "https://html.duckduckgo.com/html/"
BLOG_SITE = "blog.naver.com"


class NaverBlogScraper(BaseScraper):
    source_type = "naver_blog"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> List[ScrapedItem]:
        # Try Claude web search first (requires ANTHROPIC_API_KEY)
        items = self._scrape_via_claude(wine_id, wine_name_ko)
        if items:
            return items
        # Fallback: DuckDuckGo HTML search
        return self._scrape_via_ddg(wine_id, wine_name_ko)

    def _scrape_via_claude(self, wine_id: int, query: str) -> List[ScrapedItem]:
        results = search_wine_claude(
            query=query,
            site_filter=BLOG_SITE,
            use_date_filter=True,
            max_results=config.MAX_RESULTS_PER_SOURCE,
        )
        items: List[ScrapedItem] = []
        for r in results:
            if not r.get("url") or BLOG_SITE not in r["url"]:
                continue
            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=r["url"],
                title=r.get("title", ""),
                summary=self.truncate_summary(r.get("summary", "")),
                publishedAt=None,
                thumbnailUrl=None,
                extra={"source": "claude_search"},
            ))
        return items

    def _scrape_via_ddg(self, wine_id: int, query: str) -> List[ScrapedItem]:
        encoded = requests.utils.quote(query)
        url = f"{DDG_HTML}?q=site%3Ablog.naver.com+{encoded}&kl=kr-kr"
        try:
            html = self.fetch(url)
        except Exception:
            return []
        soup = self.parse(html)
        items: List[ScrapedItem] = []
        for result in soup.select(".result")[:config.MAX_RESULTS_PER_SOURCE]:
            title_el = result.select_one(".result__title a.result__a")
            if not title_el:
                continue
            title = title_el.get_text(strip=True)
            href = title_el.get("href", "")
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
    if not href:
        return None
    if "uddg=" in href:
        try:
            from urllib.parse import urlparse, parse_qs, unquote
            parsed = urlparse(href if href.startswith("http") else "https:" + href)
            uddg = parse_qs(parsed.query).get("uddg", [None])[0]
            if uddg:
                return unquote(uddg)
        except Exception:
            pass
    if href.startswith("http"):
        return href
    return None
