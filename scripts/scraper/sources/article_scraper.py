# scripts/scraper/sources/article_scraper.py
from urllib.parse import quote, urljoin, urlparse, parse_qs, unquote
from typing import List, Optional
from base_scraper import BaseScraper
from db_client import ScrapedItem
import config

DDG_HTML = "https://html.duckduckgo.com/html/"

# ---------------------------------------------------------------------------
# Source definitions
# Each source may include an optional "ddg_site" for bot-resilient fallback.
# ---------------------------------------------------------------------------
KR_SOURCES = [
    {
        "name": "wine21",
        # wine21.com returns 403 to bots — use DDG site: search as primary
        "search_url": "https://www.wine21.com/search/?keyword={query}",
        "result_sel": ".search_list li",
        "title_sel": "a",
        "desc_sel": ".summary",
        "ddg_site": "wine21.com",
    },
    {
        "name": "sommelierTimes",
        # Standard WordPress search; may also block — provide DDG fallback
        "search_url": "https://www.sommelierkorea.co.kr/?s={query}",
        "result_sel": "article.post",
        "title_sel": "h2 a",
        "desc_sel": ".entry-summary",
        "ddg_site": "sommelierkorea.co.kr",
    },
]

GLOBAL_SOURCES = [
    {
        "name": "decanter",
        # decanter.com returns 403 to bots — use DDG site: search as primary
        "search_url": "https://www.decanter.com/search/?q={query}",
        "result_sel": "article",
        "title_sel": "h3 a, h2 a",
        "desc_sel": "p",
        "ddg_site": "decanter.com",
    },
]


def _unwrap_ddg_url(href: str) -> Optional[str]:
    """Extract the real destination URL from a DuckDuckGo redirect href."""
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


JS_SIGNALS = ("javascript required", "enable javascript", "cf-browser-verification")


class ArticleScraper(BaseScraper):
    source_type = "article_kr"

    def __init__(self, is_global: bool = False):
        super().__init__()
        self.is_global = is_global
        self.source_type = "article_global" if is_global else "article_kr"
        self.sources = GLOBAL_SOURCES if is_global else KR_SOURCES

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> List[ScrapedItem]:
        query = wine_slug if self.is_global else wine_name_ko
        items: List[ScrapedItem] = []
        for source in self.sources:
            try:
                source_items = self._scrape_source(wine_id, query, source)
                items.extend(source_items)
            except Exception:
                continue
        return items[: config.MAX_RESULTS_PER_SOURCE]

    # ------------------------------------------------------------------
    # Per-source scrape: try direct first, then DDG fallback
    # ------------------------------------------------------------------
    def _scrape_source(self, wine_id: int, query: str, source: dict) -> List[ScrapedItem]:
        direct = self._scrape_direct(wine_id, query, source)
        if direct:
            return direct
        ddg_site = source.get("ddg_site", "")
        if ddg_site:
            return self._scrape_via_ddg(wine_id, query, source, ddg_site)
        return []

    def _scrape_direct(self, wine_id: int, query: str, source: dict) -> List[ScrapedItem]:
        url = source["search_url"].format(query=quote(query))
        try:
            html = self.fetch(url)
        except Exception:
            return []

        # Skip JS-challenge / empty responses
        if len(html) < 500 or any(sig in html.lower() for sig in JS_SIGNALS):
            return []

        soup = self.parse(html)
        results = soup.select(source["result_sel"])
        if not results:
            return []

        items: List[ScrapedItem] = []
        for article in results[:3]:
            title_el = article.select_one(source["title_sel"])
            desc_el = article.select_one(source["desc_sel"])
            if not title_el:
                continue
            article_url = urljoin(url, title_el.get("href", "")) or url
            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=article_url,
                title=title_el.get_text(strip=True),
                summary=self.truncate_summary(desc_el.get_text(strip=True) if desc_el else "") or None,
                publishedAt=None,
                thumbnailUrl=None,
                extra={"source": source["name"]},
            ))
        return items

    def _scrape_via_ddg(self, wine_id: int, query: str, source: dict, site: str) -> List[ScrapedItem]:
        q = f"site:{site} {query}"
        url = f"{DDG_HTML}?q={quote(q)}&kl=kr-kr"
        try:
            html = self.fetch(url)
            soup = self.parse(html)
            items: List[ScrapedItem] = []
            for result in soup.select(".result")[:3]:
                title_el = result.select_one(".result__title a.result__a, a.result__a")
                if not title_el:
                    continue
                title = title_el.get_text(strip=True)
                href = _unwrap_ddg_url(title_el.get("href", ""))
                if not title or not href:
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
                    extra={"source": source["name"], "via": "ddg"},
                ))
            return items
        except Exception:
            return []
