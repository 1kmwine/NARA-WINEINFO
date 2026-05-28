"""
Naver Blog scraper for wine tasting reviews.
Searches for wine name in Korean and extracts review posts.
"""
import logging
import time
from datetime import datetime
from typing import Optional
from urllib.parse import quote

import requests
from bs4 import BeautifulSoup

import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from config import DEFAULT_HEADERS, NAVER_BLOG_SEARCH, NAVER_DELAY, MAX_ITEMS_PER_SOURCE, REQUEST_TIMEOUT

logger = logging.getLogger(__name__)

# Keywords that indicate a tasting/review post
REVIEW_KEYWORDS = ["시음", "리뷰", "후기", "테이스팅", "추천", "개봉", "마셔봤", "시향"]


def _build_search_query(wine_name_ko: str, wine_name_en: str) -> str:
    """Build search query combining Korean and English wine names."""
    return f"{wine_name_ko} 와인 시음"


def _parse_date(date_str: str) -> Optional[datetime]:
    """Parse various Korean date formats."""
    if not date_str:
        return None
    date_str = date_str.strip()
    formats = [
        "%Y. %m. %d.",
        "%Y.%m.%d.",
        "%Y-%m-%d",
        "%Y년 %m월 %d일",
    ]
    for fmt in formats:
        try:
            return datetime.strptime(date_str, fmt)
        except ValueError:
            continue
    return None


def _is_review_post(title: str, description: str) -> bool:
    """Check if the post is a tasting/review post."""
    combined = f"{title} {description}".lower()
    return any(kw in combined for kw in REVIEW_KEYWORDS)


def scrape_naver_blog(
    wine_id: int,
    wine_name_ko: str,
    wine_name_en: str,
    max_items: int = MAX_ITEMS_PER_SOURCE,
) -> list[dict]:
    """
    Scrape Naver Blog for wine tasting reviews.

    Args:
        wine_id: Database ID of the wine
        wine_name_ko: Korean name of the wine
        wine_name_en: English name of the wine
        max_items: Maximum number of items to collect

    Returns:
        List of scraped data dicts ready for db_client.save_scraped_data
    """
    query = _build_search_query(wine_name_ko, wine_name_en)
    encoded_query = quote(query)
    url = f"{NAVER_BLOG_SEARCH}{encoded_query}"

    logger.info(f"Scraping Naver Blog for: {query}")

    results = []

    try:
        resp = requests.get(
            url,
            headers=DEFAULT_HEADERS,
            timeout=REQUEST_TIMEOUT,
        )
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, "html.parser")

        # Naver blog search result items
        items = soup.select("ul.lst_type1 li") or soup.select("div.total_wrap li")

        if not items:
            # Try the newer Naver search result format
            items = soup.select("div.view_wrap")

        for item in items[:max_items * 2]:  # fetch extra, filter later
            if len(results) >= max_items:
                break

            try:
                # Extract title
                title_el = (
                    item.select_one("a.title_link")
                    or item.select_one("a.api_txt_lines")
                    or item.select_one(".title")
                )
                if not title_el:
                    continue
                title = title_el.get_text(strip=True)
                link = title_el.get("href", "")

                # Extract description/content summary
                desc_el = (
                    item.select_one("div.dsc_txt_wrap")
                    or item.select_one("div.api_txt_lines")
                    or item.select_one(".dsc")
                )
                description = desc_el.get_text(strip=True) if desc_el else ""

                # Check if review-related
                if not _is_review_post(title, description):
                    continue

                # Extract author
                author_el = (
                    item.select_one("a.sub_txt.sub_name")
                    or item.select_one(".sub_name")
                    or item.select_one(".blog_name")
                )
                author = author_el.get_text(strip=True) if author_el else None

                # Extract date
                date_el = item.select_one("span.sub_txt.sub_time") or item.select_one(".sub_time")
                published_at = None
                if date_el:
                    published_at = _parse_date(date_el.get_text(strip=True))

                if not link or not title:
                    continue

                results.append(
                    {
                        "wine_id": wine_id,
                        "source_type": "naver_blog",
                        "title": title,
                        "url": link,
                        "content": description,
                        "author": author,
                        "published_at": published_at,
                        "metadata": {"query": query},
                    }
                )

                time.sleep(0.3)

            except Exception as e:
                logger.debug(f"Error parsing blog item: {e}")
                continue

        logger.info(f"Found {len(results)} Naver blog posts for {wine_name_ko}")
        time.sleep(NAVER_DELAY)

    except requests.RequestException as e:
        logger.error(f"Request failed for Naver blog scrape: {e}")

    return results
