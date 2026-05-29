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
        except RuntimeError:
            return []
        soup = self.parse(html)

        summary = ""
        desc_el = soup.select_one("meta[name='description']")
        if desc_el:
            summary = desc_el.get("content", "")
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
