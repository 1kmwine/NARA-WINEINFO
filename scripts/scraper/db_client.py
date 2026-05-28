"""
HTTP client to save scraped data to NARA WINEINFO via the Next.js API.
"""
import json
import logging
from datetime import datetime
from typing import Optional

import requests

from config import API_BASE_URL, REQUEST_TIMEOUT

logger = logging.getLogger(__name__)


class NaraDBClient:
    """Client for the NARA WINEINFO REST API."""

    def __init__(self, base_url: str = API_BASE_URL):
        self.base_url = base_url.rstrip("/")
        self.session = requests.Session()
        self.session.headers.update({"Content-Type": "application/json"})

    def get_wines(self, limit: int = 100, page: int = 1) -> list[dict]:
        """Fetch all wines from the API."""
        resp = self.session.get(
            f"{self.base_url}/api/wines",
            params={"limit": limit, "page": page},
            timeout=REQUEST_TIMEOUT,
        )
        resp.raise_for_status()
        data = resp.json()
        return data.get("data", [])

    def get_wine_by_slug(self, slug: str) -> Optional[dict]:
        """Fetch a single wine by slug."""
        resp = self.session.get(
            f"{self.base_url}/api/wines/{slug}",
            timeout=REQUEST_TIMEOUT,
        )
        if resp.status_code == 404:
            return None
        resp.raise_for_status()
        return resp.json()

    def save_scraped_data(
        self,
        wine_id: int,
        source_type: str,
        *,
        source_name: Optional[str] = None,
        title: Optional[str] = None,
        url: Optional[str] = None,
        content: Optional[str] = None,
        author: Optional[str] = None,
        published_at: Optional[datetime] = None,
        metadata: Optional[dict] = None,
    ) -> Optional[dict]:
        """Save scraped data for a wine to the database via the API."""
        payload = {
            "sourceType": source_type,
            "sourceName": source_name,
            "title": title,
            "url": url,
            "content": content,
            "author": author,
            "publishedAt": published_at.isoformat() if published_at else None,
            "metadata": metadata or {},
        }

        try:
            resp = self.session.post(
                f"{self.base_url}/api/scrape/{wine_id}",
                data=json.dumps(payload),
                timeout=REQUEST_TIMEOUT,
            )
            resp.raise_for_status()
            logger.info(f"Saved scraped data for wine {wine_id} [{source_type}]: {title}")
            return resp.json()
        except requests.HTTPError as e:
            logger.error(f"HTTP error saving scraped data for wine {wine_id}: {e}")
            return None
        except Exception as e:
            logger.error(f"Error saving scraped data for wine {wine_id}: {e}")
            return None

    def get_scraped_data(self, wine_id: int) -> list[dict]:
        """Get all scraped data for a wine."""
        resp = self.session.get(
            f"{self.base_url}/api/scrape/{wine_id}",
            timeout=REQUEST_TIMEOUT,
        )
        resp.raise_for_status()
        return resp.json()

    def delete_scraped_data(
        self, wine_id: int, source_type: Optional[str] = None
    ) -> dict:
        """Delete scraped data for a wine (optionally by source type)."""
        params = {}
        if source_type:
            params["sourceType"] = source_type

        resp = self.session.delete(
            f"{self.base_url}/api/scrape/{wine_id}",
            params=params,
            timeout=REQUEST_TIMEOUT,
        )
        resp.raise_for_status()
        return resp.json()
