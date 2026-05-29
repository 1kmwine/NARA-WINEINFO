# scripts/scraper/sources/article_scraper.py
from urllib.parse import quote, urljoin
from base_scraper import BaseScraper
from db_client import ScrapedItem
import config

KR_SOURCES = [
    {
        "name": "wine21",
        "search_url": "https://www.wine21.com/search/?keyword={query}",
        "result_sel": ".search_list li",
        "title_sel": "a",
        "desc_sel": ".summary",
    },
    {
        "name": "sommelierTimes",
        "search_url": "https://www.sommelierkorea.co.kr/?s={query}",
        "result_sel": "article.post",
        "title_sel": "h2 a",
        "desc_sel": ".entry-summary",
    },
]

GLOBAL_SOURCES = [
    {
        "name": "decanter",
        "search_url": "https://www.decanter.com/search/?q={query}",
        "result_sel": "article",
        "title_sel": "h3 a, h2 a",
        "desc_sel": "p",
    },
]


class ArticleScraper(BaseScraper):
    source_type = "article_kr"

    def __init__(self, is_global: bool = False):
        super().__init__()
        self.is_global = is_global
        self.source_type = "article_global" if is_global else "article_kr"
        self.sources = GLOBAL_SOURCES if is_global else KR_SOURCES

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        query = wine_slug if self.is_global else wine_name_ko
        items: list[ScrapedItem] = []
        for source in self.sources:
            try:
                url = source["search_url"].format(query=quote(query))
                html = self.fetch(url)
                soup = self.parse(html)
                for article in soup.select(source["result_sel"])[:3]:
                    title_el = article.select_one(source["title_sel"])
                    desc_el = article.select_one(source["desc_sel"])
                    if not title_el:
                        continue
                    article_url = urljoin(url, title_el.get("href", ""))
                    if not article_url:
                        article_url = url
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
            except RuntimeError:
                continue
        return items[: config.MAX_RESULTS_PER_SOURCE]
