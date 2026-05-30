# scripts/scraper/sources/article_scraper.py
import re
import requests
from urllib.parse import quote, urlparse, parse_qs, unquote
from typing import List, Optional, Set
from base_scraper import BaseScraper
from db_client import ScrapedItem
import config

NAVER_NEWS = "https://search.naver.com/search.naver"
DDG_HTML = "https://html.duckduckgo.com/html/"

NAVER_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8",
    "Referer": "https://www.naver.com",
}

# Korean sources — searched via Naver news (where=news)
KR_SOURCES = [
    {"name": "wine21",        "domain": "wine21.com",          "naver_kw": "wine21"},
    {"name": "sommelierTimes","domain": "sommelierkorea.co.kr", "naver_kw": "소믈리에타임즈"},
    {"name": "metro",         "domain": "metro.co.kr",          "naver_kw": "메트로신문"},
    {"name": "fnNews",        "domain": "fnnews.com",           "naver_kw": "파이낸셜뉴스"},
    {"name": "hankyung",      "domain": "hankyung.com",         "naver_kw": "한국경제"},
]

# Global sources — searched via DuckDuckGo site:
GLOBAL_SOURCES = [
    {"name": "robertParker",   "domain": "robertparker.com"},
    {"name": "wineSpectator",  "domain": "winespectator.com"},
    {"name": "wineEnthusiast", "domain": "winemag.com"},
    {"name": "jamesSuckling",  "domain": "jamessuckling.com"},
    {"name": "decanter",       "domain": "decanter.com"},
]

JS_SIGNALS = ("javascript required", "enable javascript", "cf-browser-verification")


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


class ArticleScraper(BaseScraper):
    source_type = "article_kr"

    def __init__(self, is_global: bool = False):
        super().__init__()
        self.is_global = is_global
        self.source_type = "article_global" if is_global else "article_kr"
        self.sources = GLOBAL_SOURCES if is_global else KR_SOURCES

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> List[ScrapedItem]:
        items: List[ScrapedItem] = []
        seen: Set[str] = set()

        for source in self.sources:
            try:
                if self.is_global:
                    new_items = self._scrape_global_source(wine_id, wine_slug, wine_name_ko, source)
                else:
                    new_items = self._scrape_kr_source(wine_id, wine_name_ko, source)
                for item in new_items:
                    if item.url not in seen:
                        seen.add(item.url)
                        items.append(item)
            except Exception:
                continue

        return items[: config.MAX_RESULTS_PER_SOURCE]

    # ------------------------------------------------------------------
    # Korean sources: Naver news search → DDG fallback
    # ------------------------------------------------------------------
    def _scrape_kr_source(self, wine_id: int, wine_name_ko: str, source: dict) -> List[ScrapedItem]:
        items = self._scrape_kr_via_naver(wine_id, wine_name_ko, source)
        if items:
            return items
        return self._scrape_via_ddg(wine_id, wine_name_ko, source)

    def _scrape_kr_via_naver(self, wine_id: int, wine_name_ko: str, source: dict) -> List[ScrapedItem]:
        query = f"{wine_name_ko} {source['naver_kw']}"
        try:
            resp = requests.get(
                NAVER_NEWS,
                params={"where": "news", "query": query, "sort": "1"},
                headers=NAVER_HEADERS,
                timeout=config.REQUEST_TIMEOUT,
            )
            if not resp.ok:
                return []
        except Exception:
            return []

        soup = self.parse(resp.text)
        domain = source["domain"]
        items: List[ScrapedItem] = []

        for a in soup.find_all("a", href=re.compile(r'https?://')):
            href = a.get("href", "")
            if domain not in href:
                continue
            title = a.get_text(strip=True)
            if not title or len(title) < 5:
                continue

            # Find snippet in surrounding container
            summary = ""
            container = a
            for _ in range(5):
                if not container.parent:
                    break
                container = container.parent
                if container.name in ("li", "div", "article"):
                    break
            for sel in (".news_dsc", ".dsc_txt", ".sub_txt", "p"):
                el = container.select_one(sel)
                if el:
                    t = el.get_text(strip=True)
                    if len(t) > 20 and t != title:
                        summary = t
                        break

            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=href,
                title=title,
                summary=self.truncate_summary(summary),
                publishedAt=None,
                thumbnailUrl=None,
                extra={"source": source["name"], "via": "naver_news"},
            ))
            if len(items) >= 2:
                break

        return items

    # ------------------------------------------------------------------
    # Global sources: DuckDuckGo site: search
    # ------------------------------------------------------------------
    def _scrape_global_source(self, wine_id: int, wine_slug: str, wine_name_ko: str, source: dict) -> List[ScrapedItem]:
        # Try English slug first, then Korean name
        items = self._scrape_via_ddg(wine_id, wine_slug, source)
        if not items:
            items = self._scrape_via_ddg(wine_id, wine_name_ko, source)
        return items

    # ------------------------------------------------------------------
    # DuckDuckGo site: fallback (used by both KR and global)
    # ------------------------------------------------------------------
    def _scrape_via_ddg(self, wine_id: int, query: str, source: dict) -> List[ScrapedItem]:
        domain = source["domain"]
        q = quote(f"site:{domain} {query}")
        url = f"{DDG_HTML}?q={q}&kl=kr-kr"
        try:
            html = self.fetch(url)
        except Exception:
            return []

        if len(html) < 200 or any(sig in html.lower() for sig in JS_SIGNALS):
            return []

        soup = self.parse(html)
        items: List[ScrapedItem] = []
        for result in soup.select(".result")[:2]:
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
