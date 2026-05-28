"""
Weekly batch scraper for NARA WINEINFO.
Collects data from multiple sources and saves to database via API.

Usage:
    python main.py --all                    # Scrape all published wines
    python main.py --wine-id 1              # Scrape a specific wine by DB id
    python main.py --wine-id 1 --sources naver_blog,youtube  # Specific sources
    python main.py --all --dry-run          # Dry run (don't save)
"""
import argparse
import logging
import sys
import time
from typing import Optional

from db_client import NaraDBClient
from sources.naver_blog import scrape_naver_blog
from sources.naver_cafe import scrape_naver_cafe
from sources.youtube_scraper import scrape_youtube
from sources.wine_searcher import scrape_wine_searcher
from sources.winery_official import scrape_winery_official
from sources.article_scraper import scrape_articles

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler("scraper.log", encoding="utf-8"),
    ],
)
logger = logging.getLogger(__name__)

# All available source scrapers
ALL_SOURCES = [
    "naver_blog",
    "naver_cafe",
    "youtube",
    "wine_searcher",
    "winery_official",
    "article",
]


def scrape_wine(
    wine: dict,
    sources: list[str],
    client: NaraDBClient,
    dry_run: bool = False,
) -> dict[str, int]:
    """
    Run all configured scrapers for a single wine.

    Returns:
        Dict mapping source_type -> number of items saved
    """
    wine_id = wine["id"]
    name_ko = wine.get("nameKo", "")
    name_en = wine.get("nameEn", "")
    winery = wine.get("winery", {}) or {}
    winery_name_en = winery.get("nameEn", "")
    winery_website = winery.get("websiteUrl", "")

    logger.info(f"--- Scraping wine: {name_ko} (ID: {wine_id}) ---")
    counts: dict[str, int] = {}

    for source in sources:
        try:
            items = []

            if source == "naver_blog":
                items = scrape_naver_blog(wine_id, name_ko, name_en)
            elif source == "naver_cafe":
                items = scrape_naver_cafe(wine_id, name_ko, name_en)
            elif source == "youtube":
                items = scrape_youtube(wine_id, name_ko, name_en)
            elif source == "wine_searcher":
                items = scrape_wine_searcher(wine_id, name_en)
            elif source == "winery_official":
                if winery_website:
                    items = scrape_winery_official(
                        wine_id, name_en, winery_name_en, winery_website
                    )
            elif source == "article":
                items = scrape_articles(wine_id, name_en)

            if not items:
                logger.info(f"  [{source}] No items found")
                continue

            saved = 0
            if not dry_run:
                for item in items:
                    result = client.save_scraped_data(
                        wine_id=wine_id,
                        source_type=item["source_type"],
                        source_name=item.get("source_name"),
                        title=item.get("title"),
                        url=item.get("url"),
                        content=item.get("content"),
                        author=item.get("author"),
                        published_at=item.get("published_at"),
                        metadata=item.get("metadata"),
                    )
                    if result:
                        saved += 1
            else:
                saved = len(items)
                for item in items:
                    logger.info(f"  [DRY RUN] Would save: {item.get('title', 'untitled')[:60]}")

            counts[source] = saved
            logger.info(f"  [{source}] Saved {saved}/{len(items)} items")

        except Exception as e:
            logger.error(f"  [{source}] Error: {e}", exc_info=True)
            counts[source] = 0

        # Be polite between sources
        time.sleep(1)

    return counts


def main():
    parser = argparse.ArgumentParser(
        description="NARA WINEINFO weekly batch scraper"
    )
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--all", action="store_true", help="Scrape all wines")
    group.add_argument("--wine-id", type=int, help="Scrape a specific wine by ID")

    parser.add_argument(
        "--sources",
        type=str,
        default=",".join(ALL_SOURCES),
        help=f"Comma-separated list of sources to scrape. Options: {', '.join(ALL_SOURCES)}",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Simulate scraping without saving to database",
    )
    parser.add_argument(
        "--clear-existing",
        action="store_true",
        help="Clear existing scraped data before re-scraping",
    )
    parser.add_argument(
        "--api-url",
        type=str,
        default=None,
        help="Override API base URL (default: from .env)",
    )

    args = parser.parse_args()

    sources = [s.strip() for s in args.sources.split(",") if s.strip()]
    invalid_sources = [s for s in sources if s not in ALL_SOURCES]
    if invalid_sources:
        logger.error(f"Invalid sources: {invalid_sources}. Valid options: {ALL_SOURCES}")
        sys.exit(1)

    from config import API_BASE_URL
    base_url = args.api_url or API_BASE_URL
    client = NaraDBClient(base_url)

    logger.info(f"Starting scraper — API: {base_url}, Sources: {sources}, Dry run: {args.dry_run}")

    if args.wine_id:
        # Scrape a single wine
        wines = []
        all_wines = client.get_wines(limit=1000)
        for w in all_wines:
            if w["id"] == args.wine_id:
                wines = [w]
                break

        if not wines:
            logger.error(f"Wine with ID {args.wine_id} not found")
            sys.exit(1)
    else:
        # Scrape all wines (paginated)
        wines = []
        page = 1
        while True:
            batch = client.get_wines(limit=100, page=page)
            if not batch:
                break
            wines.extend(batch)
            if len(batch) < 100:
                break
            page += 1

    logger.info(f"Found {len(wines)} wines to process")

    total_saved: dict[str, int] = {s: 0 for s in sources}

    for i, wine in enumerate(wines, 1):
        logger.info(f"[{i}/{len(wines)}] Processing: {wine.get('nameKo', 'Unknown')}")

        if args.clear_existing and not args.dry_run:
            for source in sources:
                try:
                    client.delete_scraped_data(wine["id"], source)
                except Exception as e:
                    logger.debug(f"Error clearing {source} for wine {wine['id']}: {e}")

        counts = scrape_wine(wine, sources, client, dry_run=args.dry_run)

        for source, count in counts.items():
            total_saved[source] = total_saved.get(source, 0) + count

        # Pause between wines
        time.sleep(2)

    logger.info("=== Scraping complete ===")
    for source, count in total_saved.items():
        logger.info(f"  {source}: {count} items {'(dry run)' if args.dry_run else 'saved'}")


if __name__ == "__main__":
    main()
