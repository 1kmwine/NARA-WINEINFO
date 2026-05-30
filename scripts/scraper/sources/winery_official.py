# scripts/scraper/sources/winery_official.py
from base_scraper import BaseScraper
from db_client import ScrapedItem


class WineryOfficialScraper(BaseScraper):
    source_type = "winery_official"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        # winery URL comes from external caller via scrape_winery_url
        return []

    def scrape_winery_url(self, wine_id: int, winery_url: str, wine_name_ko: str) -> list[ScrapedItem]:
        if not winery_url:
            return []
        try:
            html = self.fetch(winery_url)
        except Exception:
            return []
        soup = self.parse(html)

        summary = ""
        for selector, attr in [
            ("meta[property='og:description']", "content"),
            ("meta[name='description']", "content"),
        ]:
            el = soup.select_one(selector)
            if el:
                summary = el.get(attr, "").strip()
            if summary:
                break
        if not summary:
            body_el = soup.select_one("main p, article p, .content p")
            if body_el:
                summary = body_el.get_text(strip=True)

        if not summary:
            return []
        return [ScrapedItem(
            wineId=wine_id,
            sourceType=self.source_type,
            url=winery_url,
            title=f"{wine_name_ko} — 와이너리 공식",
            summary=self.truncate_summary(summary) or None,
            publishedAt=None,
            thumbnailUrl=None,
            extra={},
        )]
