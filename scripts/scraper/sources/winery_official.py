"""
Official winery website scraper.
Fetches wine description and notes from the winery's own website.
"""
import logging
import re
import time
from typing import Optional
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from config import DEFAULT_HEADERS, REQUEST_DELAY, REQUEST_TIMEOUT

logger = logging.getLogger(__name__)


def _clean_text(text: str) -> str:
    """Clean and normalize extracted text."""
    text = re.sub(r'\s+', ' ', text)
    return text.strip()


def _extract_main_content(soup: BeautifulSoup) -> Optional[str]:
    """Extract the main content/description from a page."""
    # Try common content selectors
    selectors = [
        "main article",
        ".wine-description",
        ".product-description",
        "#wine-notes",
        ".tasting-notes",
        "main p",
        "article p",
        ".content p",
    ]

    for selector in selectors:
        els = soup.select(selector)
        if els:
            text = " ".join(el.get_text(strip=True) for el in els[:5])
            if len(text) > 50:
                return _clean_text(text[:2000])

    return None


def scrape_winery_official(
    wine_id: int,
    wine_name_en: str,
    winery_name_en: str,
    website_url: Optional[str] = None,
) -> list[dict]:
    """
    Scrape official winery website for wine information.

    Args:
        wine_id: Database ID of the wine
        wine_name_en: English name of the wine
        winery_name_en: English name of the winery
        website_url: URL of the winery's official website

    Returns:
        List of scraped data dicts
    """
    if not website_url:
        logger.info(f"No website URL for winery: {winery_name_en}")
        return []

    logger.info(f"Scraping official winery website: {website_url}")

    try:
        resp = requests.get(
            website_url,
            headers=DEFAULT_HEADERS,
            timeout=REQUEST_TIMEOUT,
            allow_redirects=True,
        )
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, "html.parser")

        # Try to find the specific wine page
        wine_links = []
        wine_slug = wine_name_en.lower().replace(" ", "-")

        for link in soup.select("a[href]"):
            href = link.get("href", "")
            link_text = link.get_text(strip=True).lower()
            href_lower = href.lower()

            # Check if this link might be for our wine
            if any(word in href_lower or word in link_text
                   for word in wine_name_en.lower().split()[:3]):
                full_url = urljoin(website_url, href)
                wine_links.append(full_url)

        # Fetch the wine-specific page if found
        content = None
        final_url = resp.url

        if wine_links:
            wine_url = wine_links[0]
            try:
                wine_resp = requests.get(
                    wine_url,
                    headers=DEFAULT_HEADERS,
                    timeout=REQUEST_TIMEOUT,
                )
                wine_resp.raise_for_status()
                wine_soup = BeautifulSoup(wine_resp.text, "html.parser")
                content = _extract_main_content(wine_soup)
                final_url = wine_resp.url
                time.sleep(REQUEST_DELAY)
            except Exception as e:
                logger.debug(f"Could not fetch wine-specific page {wine_url}: {e}")

        # Fall back to extracting content from the main page
        if not content:
            content = _extract_main_content(soup)

        if not content:
            logger.info(f"No meaningful content found at {website_url}")
            return []

        time.sleep(REQUEST_DELAY)

        return [
            {
                "wine_id": wine_id,
                "source_type": "winery_official",
                "source_name": winery_name_en,
                "title": f"{wine_name_en} - {winery_name_en} Official",
                "url": final_url,
                "content": content,
                "author": winery_name_en,
                "published_at": None,
                "metadata": {
                    "winery": winery_name_en,
                    "official": True,
                },
            }
        ]

    except requests.RequestException as e:
        logger.error(f"Request failed for winery website {website_url}: {e}")
        return []
    except Exception as e:
        logger.error(f"Unexpected error scraping winery website: {e}")
        return []
