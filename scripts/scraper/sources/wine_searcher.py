"""
Wine-Searcher.com scraper.
Extracts average price, community ratings, and related data.
"""
import logging
import re
import time
from typing import Optional
from urllib.parse import quote

import requests
from bs4 import BeautifulSoup

import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from config import DEFAULT_HEADERS, REQUEST_DELAY, REQUEST_TIMEOUT

logger = logging.getLogger(__name__)

WINE_SEARCHER_BASE = "https://www.wine-searcher.com/find/"


def _clean_price(price_str: str) -> Optional[float]:
    """Extract numeric price from string like '$75' or 'KRW 95,000'."""
    if not price_str:
        return None
    match = re.search(r"[\d,]+\.?\d*", price_str.replace(",", ""))
    if match:
        try:
            return float(match.group())
        except ValueError:
            pass
    return None


def scrape_wine_searcher(
    wine_id: int,
    wine_name_en: str,
    vintage: Optional[int] = None,
) -> list[dict]:
    """
    Scrape Wine-Searcher for price and rating information.

    Args:
        wine_id: Database ID of the wine
        wine_name_en: English name of the wine (for search)
        vintage: Optional specific vintage year to search

    Returns:
        List of scraped data dicts (typically 0 or 1 item)
    """
    # Build search URL
    slug = wine_name_en.lower().replace(" ", "+")
    if vintage:
        url = f"{WINE_SEARCHER_BASE}{quote(slug)}/1/{vintage}"
    else:
        url = f"{WINE_SEARCHER_BASE}{quote(slug)}"

    logger.info(f"Scraping Wine-Searcher for: {wine_name_en}")

    try:
        resp = requests.get(url, headers=DEFAULT_HEADERS, timeout=REQUEST_TIMEOUT)
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, "html.parser")

        metadata = {"query": wine_name_en, "vintage": vintage}
        content_parts = []

        # Extract wine title
        title_el = soup.select_one("h1") or soup.select_one(".wine-name")
        title = title_el.get_text(strip=True) if title_el else wine_name_en

        # Try to extract average price
        price_el = (
            soup.select_one("[data-cy='avg-price']")
            or soup.select_one(".avg-price")
            or soup.select_one("span.price")
        )
        if price_el:
            price_text = price_el.get_text(strip=True)
            price_val = _clean_price(price_text)
            if price_val:
                metadata["avgPrice"] = price_val
                content_parts.append(f"평균 가격: {price_text}")

        # Try to extract community score
        score_el = (
            soup.select_one("[data-cy='community-score']")
            or soup.select_one(".community-score")
            or soup.select_one(".expert-score")
        )
        if score_el:
            score_text = score_el.get_text(strip=True)
            metadata["communityScore"] = score_text
            content_parts.append(f"커뮤니티 점수: {score_text}")

        # Extract description if available
        desc_el = soup.select_one(".wine-description") or soup.select_one("p.description")
        if desc_el:
            desc_text = desc_el.get_text(strip=True)
            content_parts.append(f"설명: {desc_text}")

        content = "\n".join(content_parts) if content_parts else None

        time.sleep(REQUEST_DELAY)

        return [
            {
                "wine_id": wine_id,
                "source_type": "wine_searcher",
                "source_name": "Wine-Searcher",
                "title": title,
                "url": resp.url,
                "content": content,
                "author": None,
                "published_at": None,
                "metadata": metadata,
            }
        ]

    except requests.RequestException as e:
        logger.error(f"Request failed for Wine-Searcher: {e}")
        return []
    except Exception as e:
        logger.error(f"Unexpected error scraping Wine-Searcher: {e}")
        return []
