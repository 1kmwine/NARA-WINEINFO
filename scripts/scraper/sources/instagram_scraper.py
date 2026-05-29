# scripts/scraper/sources/instagram_scraper.py
from base_scraper import BaseScraper
from db_client import ScrapedItem


class InstagramScraper(BaseScraper):
    """No public API available — returns empty results.
    Implement when Meta Graph API token is available."""
    source_type = "instagram"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        return []
