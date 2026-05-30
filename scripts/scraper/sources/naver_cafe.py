# scripts/scraper/sources/naver_cafe.py
import re
import requests
from typing import List, Optional, Set
from base_scraper import BaseScraper
from db_client import ScrapedItem
from claude_search_client import search_wine_claude
import config

NAVER_CAFE_SEARCH = "https://search.naver.com/search.naver"
DDG_HTML = "https://html.duckduckgo.com/html/"
TARGET_CAFE = "winerack24"
CAFE_SITE = f"cafe.naver.com/{TARGET_CAFE}"

WASSAP_URL = (
    "https://create-repl--dashnaracellar.replit.app/articles"
    "?key=naracellar-scraper&type=popular&count=20"
)

# Matches cafe article URLs: cafe.naver.com/{cafeName}/{articleId}
CAFE_POST_RE = re.compile(r'https?://cafe\.naver\.com/[A-Za-z0-9_]+/\d+')

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


class NaverCafeScraper(BaseScraper):
    source_type = "naver_cafe"
    TARGET_CAFE = TARGET_CAFE

    def scrape_wine(self, wine_id: int, _wine_slug: str, wine_name_ko: str) -> List[ScrapedItem]:
        # 1st: WASSAP Replit API (winerack24 popular articles, filter by wine name)
        items = self._scrape_via_wassap(wine_id, wine_name_ko)
        if items:
            return items
        # 2nd: Naver cafe search (no API key, works from personal IP)
        items = self._scrape_via_naver(wine_id, wine_name_ko)
        if items:
            return items
        # 3rd: Claude web_search
        items = self._scrape_via_claude(wine_id, wine_name_ko)
        if items:
            return items
        # 4th: DuckDuckGo fallback
        return self._scrape_via_ddg(wine_id, wine_name_ko)

    def _scrape_via_wassap(self, wine_id: int, wine_name_ko: str) -> List[ScrapedItem]:
        try:
            resp = requests.get(WASSAP_URL, timeout=config.REQUEST_TIMEOUT)
            if not resp.ok:
                return []
            data = resp.json()
            articles = data if isinstance(data, list) else data.get("articles", [])
        except Exception:
            return []

        items: List[ScrapedItem] = []
        name_lower = wine_name_ko.lower()
        for article in articles:
            title = str(article.get("title", ""))
            content = str(article.get("content", article.get("summary", "")))
            if name_lower not in title.lower() and name_lower not in content.lower():
                continue
            url = article.get("url", "")
            if not url:
                continue
            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=url,
                title=title,
                summary=self.truncate_summary(content),
                publishedAt=article.get("date") or article.get("publishedAt"),
                thumbnailUrl=None,
                extra={"cafeName": TARGET_CAFE, "source": "wassap"},
            ))
            if len(items) >= config.MAX_RESULTS_PER_SOURCE:
                break
        return items

    def _scrape_via_naver(self, wine_id: int, query: str) -> List[ScrapedItem]:
        try:
            resp = requests.get(
                NAVER_CAFE_SEARCH,
                params={"where": "article", "query": f"site:cafe.naver.com/{TARGET_CAFE} {query}"},
                headers=NAVER_HEADERS,
                timeout=config.REQUEST_TIMEOUT,
            )
            if not resp.ok:
                return []
        except Exception:
            return []

        soup = self.parse(resp.text)
        items: List[ScrapedItem] = []
        seen: Set[str] = set()

        for a in soup.find_all("a", href=CAFE_POST_RE):
            href = a.get("href", "")
            if not href or TARGET_CAFE not in href or href in seen:
                continue
            seen.add(href)

            title = a.get_text(strip=True)
            container = a
            for _ in range(6):
                if not container.parent:
                    break
                container = container.parent
                if container.name in ("li", "article", "div") and len(container.get_text()) > len(title) + 20:
                    break

            summary = ""
            for sel in (".api_txt_lines.dsc_txt_wrap", ".total_dsc", ".dsc_txt", ".sub_txt", "p"):
                dsc = container.select_one(sel)
                if dsc:
                    text = dsc.get_text(strip=True)
                    if len(text) > 20 and text != title:
                        summary = text
                        break

            if not title:
                continue

            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=href,
                title=title,
                summary=self.truncate_summary(summary),
                publishedAt=None,
                thumbnailUrl=None,
                extra={"cafeName": TARGET_CAFE, "source": "naver_search"},
            ))
            if len(items) >= config.MAX_RESULTS_PER_SOURCE:
                break

        return items

    def _scrape_via_claude(self, wine_id: int, query: str) -> List[ScrapedItem]:
        results = search_wine_claude(
            query=query,
            site_filter=CAFE_SITE,
            use_date_filter=True,
            max_results=config.MAX_RESULTS_PER_SOURCE,
        )
        items: List[ScrapedItem] = []
        for r in results:
            url = r.get("url", "")
            if not url or TARGET_CAFE not in url:
                continue
            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=url,
                title=r.get("title", ""),
                summary=self.truncate_summary(r.get("summary", "")),
                publishedAt=None,
                thumbnailUrl=None,
                extra={"cafeName": TARGET_CAFE, "source": "claude_search"},
            ))
        return items

    def _scrape_via_ddg(self, wine_id: int, query: str) -> List[ScrapedItem]:
        encoded = requests.utils.quote(query)
        site = f"site%3Acafe.naver.com%2F{TARGET_CAFE}"
        url = f"{DDG_HTML}?q={site}+{encoded}&kl=kr-kr"
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
                extra={"cafeName": TARGET_CAFE},
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
