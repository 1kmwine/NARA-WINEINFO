"""
Naver Cafe scraper - specifically targets WASSAP (와쌉) wine community cafe.
Searches for wine mentions in wine enthusiast cafe communities.
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

from config import DEFAULT_HEADERS, NAVER_DELAY, MAX_ITEMS_PER_SOURCE, REQUEST_TIMEOUT

logger = logging.getLogger(__name__)

# Naver Cafe communities to search
WINE_CAFES = [
    "winerack24",   # 와쌉 (WASSAP)
    "winelove2011", # 와인 사랑 모임
]

NAVER_SEARCH_BASE = "https://search.naver.com/search.naver"


def _build_cafe_search_url(cafe_id: str, query: str) -> str:
    """Build Naver Cafe search URL for a specific cafe."""
    full_query = f"site:cafe.naver.com/{cafe_id} {query}"
    return f"{NAVER_SEARCH_BASE}?where=article&query={quote(full_query)}"


def _parse_date(date_str: str) -> Optional[datetime]:
    """Parse date string."""
    if not date_str:
        return None
    date_str = date_str.strip()
    formats = ["%Y. %m. %d.", "%Y.%m.%d.", "%Y-%m-%d"]
    for fmt in formats:
        try:
            return datetime.strptime(date_str, fmt)
        except ValueError:
            continue
    return None


def scrape_naver_cafe(
    wine_id: int,
    wine_name_ko: str,
    wine_name_en: str,
    cafe_ids: list[str] = WINE_CAFES,
    max_items: int = MAX_ITEMS_PER_SOURCE,
) -> list[dict]:
    """
    Scrape Naver Cafe for wine mentions.

    Args:
        wine_id: Database ID of the wine
        wine_name_ko: Korean name of the wine
        wine_name_en: English name of the wine
        cafe_ids: List of Naver cafe IDs to search
        max_items: Maximum number of items per cafe

    Returns:
        List of scraped data dicts
    """
    all_results = []

    for cafe_id in cafe_ids:
        query = wine_name_ko
        url = _build_cafe_search_url(cafe_id, query)
        logger.info(f"Scraping Naver Cafe [{cafe_id}] for: {query}")

        try:
            resp = requests.get(url, headers=DEFAULT_HEADERS, timeout=REQUEST_TIMEOUT)
            resp.raise_for_status()
            soup = BeautifulSoup(resp.text, "html.parser")

            items = (
                soup.select("ul.lst_type1 li")
                or soup.select("div.total_wrap li")
                or soup.select("div.view_wrap")
            )

            results = []
            for item in items[:max_items]:
                try:
                    title_el = (
                        item.select_one("a.title_link")
                        or item.select_one("a.api_txt_lines")
                        or item.select_one(".title")
                    )
                    if not title_el:
                        continue

                    title = title_el.get_text(strip=True)
                    link = title_el.get("href", "")

                    desc_el = (
                        item.select_one("div.dsc_txt_wrap")
                        or item.select_one("div.api_txt_lines")
                    )
                    content = desc_el.get_text(strip=True) if desc_el else ""

                    author_el = item.select_one(".sub_name") or item.select_one(".nick")
                    author = author_el.get_text(strip=True) if author_el else None

                    date_el = item.select_one(".sub_time")
                    published_at = _parse_date(date_el.get_text(strip=True)) if date_el else None

                    if not link or not title:
                        continue

                    results.append(
                        {
                            "wine_id": wine_id,
                            "source_type": "naver_cafe",
                            "source_name": cafe_id,
                            "title": title,
                            "url": link,
                            "content": content,
                            "author": author,
                            "published_at": published_at,
                            "metadata": {"cafe_id": cafe_id, "query": query},
                        }
                    )

                except Exception as e:
                    logger.debug(f"Error parsing cafe item: {e}")
                    continue

            all_results.extend(results)
            logger.info(f"Found {len(results)} posts in cafe [{cafe_id}]")
            time.sleep(NAVER_DELAY)

        except requests.RequestException as e:
            logger.error(f"Request failed for Naver Cafe [{cafe_id}]: {e}")
            continue

    return all_results
