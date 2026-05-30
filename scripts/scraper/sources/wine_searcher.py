# scripts/scraper/sources/wine_searcher.py
from urllib.parse import quote, urlparse, parse_qs, unquote
from typing import List, Optional
from base_scraper import BaseScraper
from db_client import ScrapedItem

DDG_HTML = "https://html.duckduckgo.com/html/"
JS_SIGNALS = ("javascript required", "enable javascript", "please enable js", "cf-browser-verification")


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


class WineSearcherScraper(BaseScraper):
    source_type = "wine_searcher"
    SEARCH_URL = "https://www.wine-searcher.com/find/{slug}/1/korea"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> List[ScrapedItem]:
        result = self._scrape_direct(wine_id, wine_slug, wine_name_ko)
        if result:
            return result
        # Direct scrape failed (blocked / JS-only) — fall back to DDG
        return self._scrape_via_ddg(wine_id, wine_slug, wine_name_ko)

    # ------------------------------------------------------------------
    # Direct scrape
    # ------------------------------------------------------------------
    def _scrape_direct(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> List[ScrapedItem]:
        encoded_slug = quote(wine_slug, safe="").replace("-", "+")
        url = self.SEARCH_URL.format(slug=encoded_slug)
        try:
            html = self.fetch(url)
        except Exception:
            return []

        # Bail out for JS-challenge pages or suspiciously short responses
        if len(html) < 500 or any(sig in html.lower() for sig in JS_SIGNALS):
            return []

        soup = self.parse(html)

        summary_parts = []

        # Score: try multiple known class patterns + data attributes
        score_el = soup.select_one(
            "[data-criticScore], .critic-score, .community-score, "
            ".wine-score, .score, [class*='Score'], [class*='score']"
        )
        if score_el:
            summary_parts.append(f"점수: {score_el.get_text(strip=True)}")

        # Price: multiple possible selectors
        price_el = soup.select_one(
            ".price, [itemprop='price'], .avg-price, [class*='price'], [class*='Price']"
        )
        if price_el:
            summary_parts.append(f"평균가: {price_el.get_text(strip=True)}")

        # Description
        desc_el = soup.select_one(".wine-description, .description, [class*='description'], [class*='Description']")
        if desc_el:
            summary_parts.append(desc_el.get_text(strip=True))

        # Universal fallbacks: <meta name="description"> and <title>
        if not summary_parts:
            meta_desc = soup.select_one("meta[name='description']")
            if meta_desc:
                content = meta_desc.get("content", "").strip()
                if content:
                    summary_parts.append(content)
        if not summary_parts:
            og_desc = soup.select_one("meta[property='og:description']")
            if og_desc:
                content = og_desc.get("content", "").strip()
                if content:
                    summary_parts.append(content)
        if not summary_parts:
            title_tag = soup.find("title")
            if title_tag:
                summary_parts.append(title_tag.get_text(strip=True))

        if not summary_parts:
            return []

        return [ScrapedItem(
            wineId=wine_id,
            sourceType=self.source_type,
            url=url,
            title=f"{wine_name_ko} — Wine-Searcher",
            summary=self.truncate_summary(" | ".join(summary_parts)),
            publishedAt=None,
            thumbnailUrl=None,
            extra={},
        )]

    # ------------------------------------------------------------------
    # DuckDuckGo fallback: site:wine-searcher.com <slug>
    # ------------------------------------------------------------------
    def _scrape_via_ddg(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> List[ScrapedItem]:
        query = f"site:wine-searcher.com {wine_slug}"
        url = f"{DDG_HTML}?q={quote(query)}&kl=kr-kr"
        try:
            html = self.fetch(url)
            soup = self.parse(html)
            for result in soup.select(".result")[:5]:
                title_el = result.select_one(".result__title a.result__a, a.result__a")
                if not title_el:
                    continue
                href = _unwrap_ddg_url(title_el.get("href", ""))
                if not href:
                    continue
                snippet_el = result.select_one(".result__snippet")
                snippet = snippet_el.get_text(strip=True) if snippet_el else ""
                if snippet:
                    return [ScrapedItem(
                        wineId=wine_id,
                        sourceType=self.source_type,
                        url=href,
                        title=f"{wine_name_ko} — Wine-Searcher",
                        summary=self.truncate_summary(snippet),
                        publishedAt=None,
                        thumbnailUrl=None,
                        extra={"via": "ddg"},
                    )]
        except Exception:
            pass
        return []
