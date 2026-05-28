"""
International wine article scraper.
Searches for wine reviews and articles from major wine publications.
"""
import logging
import re
import time
from datetime import datetime
from typing import Optional
from urllib.parse import quote

import requests
from bs4 import BeautifulSoup

import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from config import DEFAULT_HEADERS, REQUEST_DELAY, MAX_ITEMS_PER_SOURCE, REQUEST_TIMEOUT

logger = logging.getLogger(__name__)

# Target wine publication domains
WINE_PUBLICATIONS = [
    "winespectator.com",
    "wine-searcher.com",
    "decanter.com",
    "jancisrobinson.com",
    "jamessuckling.com",
    "winemag.com",
]

# Google-style search (using Bing as alternative)
BING_SEARCH_URL = "https://www.bing.com/search?q="


def _build_article_query(wine_name_en: str) -> str:
    """Build search query for international wine articles."""
    site_filter = " OR ".join(f"site:{domain}" for domain in WINE_PUBLICATIONS[:3])
    return f'"{wine_name_en}" wine review ({site_filter})'


def _parse_date(date_str: str) -> Optional[datetime]:
    """Parse date from various formats."""
    if not date_str:
        return None
    date_str = date_str.strip()
    formats = [
        "%B %d, %Y",
        "%b %d, %Y",
        "%Y-%m-%d",
        "%d %B %Y",
        "%B %Y",
    ]
    for fmt in formats:
        try:
            return datetime.strptime(date_str, fmt)
        except ValueError:
            continue
    return None


def scrape_articles(
    wine_id: int,
    wine_name_en: str,
    max_items: int = MAX_ITEMS_PER_SOURCE,
) -> list[dict]:
    """
    Scrape international wine articles and reviews.

    Args:
        wine_id: Database ID of the wine
        wine_name_en: English name of the wine
        max_items: Maximum number of articles to collect

    Returns:
        List of scraped data dicts
    """
    query = _build_article_query(wine_name_en)
    encoded_query = quote(query)
    url = f"{BING_SEARCH_URL}{encoded_query}"

    logger.info(f"Searching for articles about: {wine_name_en}")

    results = []

    try:
        headers = {
            **DEFAULT_HEADERS,
            "User-Agent": (
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/120.0.0.0 Safari/537.36"
            ),
        }

        resp = requests.get(url, headers=headers, timeout=REQUEST_TIMEOUT)
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, "html.parser")

        # Parse Bing search results
        items = soup.select("li.b_algo") or soup.select(".b_algo")

        for item in items[:max_items * 2]:
            if len(results) >= max_items:
                break

            try:
                # Title and URL
                title_el = item.select_one("h2 a") or item.select_one("a")
                if not title_el:
                    continue

                title = title_el.get_text(strip=True)
                link = title_el.get("href", "")

                if not link or not link.startswith("http"):
                    continue

                # Check if from a wine publication
                is_wine_pub = any(pub in link for pub in WINE_PUBLICATIONS)
                if not is_wine_pub:
                    continue

                # Description
                desc_el = item.select_one(".b_caption p") or item.select_one("p")
                description = desc_el.get_text(strip=True) if desc_el else ""

                # Determine publication
                publication = next(
                    (pub for pub in WINE_PUBLICATIONS if pub in link),
                    None,
                )

                # Date (if visible in snippet)
                date_el = item.select_one("span.news_dt")
                published_at = _parse_date(date_el.get_text(strip=True)) if date_el else None

                results.append(
                    {
                        "wine_id": wine_id,
                        "source_type": "article",
                        "source_name": publication,
                        "title": title,
                        "url": link,
                        "content": description,
                        "author": publication,
                        "published_at": published_at,
                        "metadata": {
                            "publication": publication,
                            "query": wine_name_en,
                        },
                    }
                )

            except Exception as e:
                logger.debug(f"Error parsing article item: {e}")
                continue

        logger.info(f"Found {len(results)} articles for {wine_name_en}")
        time.sleep(REQUEST_DELAY)

    except requests.RequestException as e:
        logger.error(f"Request failed for article search: {e}")

    return results
