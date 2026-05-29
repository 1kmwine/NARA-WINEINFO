from dataclasses import dataclass, field
from typing import Any, Optional
import requests
import config


@dataclass
class ScrapedItem:
    wineId: int
    sourceType: str
    url: str
    title: str
    summary: Optional[str]
    publishedAt: Optional[str]
    thumbnailUrl: Optional[str]
    extra: dict[str, Any] = field(default_factory=dict)


def save_scraped_data(item: ScrapedItem) -> dict:
    item_payload = {
        "sourceType": item.sourceType,
        "url": item.url,
        "title": item.title,
        "summary": item.summary[:config.SUMMARY_MAX_CHARS] if item.summary else None,
        "publishedAt": item.publishedAt,
        "thumbnailUrl": item.thumbnailUrl,
        **item.extra,
    }
    payload = {
        "items": [item_payload],
        "wineId": item.wineId,
    }
    resp = requests.post(
        f"{config.API_BASE_URL}/api/internal/scrape",
        json=payload,
        headers={
            **config.HEADERS,
            "x-internal-key": config.INTERNAL_API_KEY,
            "Content-Type": "application/json",
        },
        timeout=config.REQUEST_TIMEOUT,
    )
    if not resp.ok:
        raise RuntimeError(f"API error {resp.status_code}: {resp.text[:200]}")
    return resp.json()
