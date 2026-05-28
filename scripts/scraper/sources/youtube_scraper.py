"""
YouTube scraper for wine review videos.
Searches for wine name + Korean review keywords and extracts video metadata.
Optionally fetches transcripts via youtube-transcript-api.
"""
import logging
import re
import time
from typing import Optional
from urllib.parse import quote

import requests
from bs4 import BeautifulSoup

try:
    from youtube_transcript_api import YouTubeTranscriptApi, NoTranscriptFound, TranscriptsDisabled
    HAS_TRANSCRIPT_API = True
except ImportError:
    HAS_TRANSCRIPT_API = False

import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from config import DEFAULT_HEADERS, REQUEST_DELAY, MAX_ITEMS_PER_SOURCE, REQUEST_TIMEOUT

logger = logging.getLogger(__name__)

YOUTUBE_SEARCH_URL = "https://www.youtube.com/results?search_query="
REVIEW_SUFFIXES = ["리뷰", "추천", "시음", "테이스팅 노트", "언박싱"]


def _get_transcript(video_id: str, lang_codes: list[str] = ["ko", "en"]) -> Optional[str]:
    """Fetch transcript for a YouTube video."""
    if not HAS_TRANSCRIPT_API:
        return None

    try:
        transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)

        # Try preferred languages first
        for lang in lang_codes:
            try:
                transcript = transcript_list.find_transcript([lang])
                entries = transcript.fetch()
                text = " ".join(entry["text"] for entry in entries)
                return text[:3000]  # Limit length
            except Exception:
                continue

        # Fall back to any available transcript
        try:
            transcript = next(iter(transcript_list))
            entries = transcript.fetch()
            text = " ".join(entry["text"] for entry in entries)
            return text[:3000]
        except StopIteration:
            pass

    except (NoTranscriptFound, TranscriptsDisabled):
        pass
    except Exception as e:
        logger.debug(f"Error fetching transcript for {video_id}: {e}")

    return None


def scrape_youtube(
    wine_id: int,
    wine_name_ko: str,
    wine_name_en: str,
    max_items: int = MAX_ITEMS_PER_SOURCE,
    fetch_transcripts: bool = True,
) -> list[dict]:
    """
    Search YouTube for wine review videos.

    Args:
        wine_id: Database ID of the wine
        wine_name_ko: Korean name of the wine
        wine_name_en: English name of the wine
        max_items: Maximum number of videos to collect
        fetch_transcripts: Whether to fetch video transcripts

    Returns:
        List of scraped data dicts
    """
    results = []

    # Try both Korean and English search queries
    queries = [
        f"{wine_name_ko} 와인 리뷰",
        f"{wine_name_en} wine review tasting",
    ]

    seen_video_ids = set()

    for query in queries:
        if len(results) >= max_items:
            break

        encoded = quote(query)
        url = f"{YOUTUBE_SEARCH_URL}{encoded}"
        logger.info(f"Searching YouTube: {query}")

        try:
            resp = requests.get(url, headers=DEFAULT_HEADERS, timeout=REQUEST_TIMEOUT)
            resp.raise_for_status()

            # Extract video data from the page HTML
            # YouTube embeds initial data as JSON in the page
            match = re.search(r'var ytInitialData = ({.*?});</script>', resp.text, re.DOTALL)
            if not match:
                logger.debug("Could not find ytInitialData in YouTube response")
                continue

            import json
            try:
                data = json.loads(match.group(1))
            except json.JSONDecodeError:
                continue

            # Navigate the YouTube data structure to find video results
            contents = (
                data.get("contents", {})
                .get("twoColumnSearchResultsRenderer", {})
                .get("primaryContents", {})
                .get("sectionListRenderer", {})
                .get("contents", [])
            )

            for section in contents:
                item_section = section.get("itemSectionRenderer", {})
                for item in item_section.get("contents", []):
                    if len(results) >= max_items:
                        break

                    video = item.get("videoRenderer", {})
                    if not video:
                        continue

                    video_id = video.get("videoId", "")
                    if not video_id or video_id in seen_video_ids:
                        continue

                    seen_video_ids.add(video_id)

                    # Extract title
                    title_runs = video.get("title", {}).get("runs", [])
                    title = "".join(r.get("text", "") for r in title_runs)

                    # Extract channel
                    channel_runs = (
                        video.get("ownerText", {}).get("runs", [])
                        or video.get("longBylineText", {}).get("runs", [])
                    )
                    channel = "".join(r.get("text", "") for r in channel_runs)

                    # Extract view count
                    view_count_text = (
                        video.get("viewCountText", {}).get("simpleText", "")
                        or video.get("viewCountText", {}).get("runs", [{}])[0].get("text", "")
                    )

                    video_url = f"https://www.youtube.com/watch?v={video_id}"

                    # Optionally get transcript
                    content = None
                    if fetch_transcripts:
                        content = _get_transcript(video_id)
                        if content:
                            time.sleep(0.5)

                    results.append(
                        {
                            "wine_id": wine_id,
                            "source_type": "youtube",
                            "source_name": "YouTube",
                            "title": title,
                            "url": video_url,
                            "content": content,
                            "author": channel,
                            "published_at": None,
                            "metadata": {
                                "videoId": video_id,
                                "channel": channel,
                                "viewCount": view_count_text,
                                "query": query,
                            },
                        }
                    )

        except requests.RequestException as e:
            logger.error(f"Request failed for YouTube search: {e}")
        except Exception as e:
            logger.error(f"Unexpected error scraping YouTube: {e}")

        time.sleep(REQUEST_DELAY)

    logger.info(f"Found {len(results)} YouTube videos for {wine_name_ko}")
    return results
