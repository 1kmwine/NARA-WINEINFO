# scripts/scraper/sources/wine_searcher.py
from urllib.parse import quote
from base_scraper import BaseScraper
from db_client import ScrapedItem


class WineSearcherScraper(BaseScraper):
    source_type = "wine_searcher"
    SEARCH_URL = "https://www.wine-searcher.com/find/{slug}/1/korea"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        encoded_slug = quote(wine_slug, safe="").replace("-", "+")
        url = self.SEARCH_URL.format(slug=encoded_slug)
        try:
            html = self.fetch(url)
        except RuntimeError:
            return []
        soup = self.parse(html)

        summary_parts = []
        score_el = soup.select_one("[data-criticScore], .critic-score, .community-score")
        price_el = soup.select_one(".price, [itemprop='price']")
        if score_el:
            summary_parts.append(f"점수: {score_el.get_text(strip=True)}")
        if price_el:
            summary_parts.append(f"평균가: {price_el.get_text(strip=True)}")
        desc_el = soup.select_one(".wine-description, .description")
        if desc_el:
            summary_parts.append(desc_el.get_text(strip=True))

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
