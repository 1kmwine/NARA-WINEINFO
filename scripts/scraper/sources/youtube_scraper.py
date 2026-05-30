# scripts/scraper/sources/youtube_scraper.py
import os
import time
import requests
from typing import Optional
from base_scraper import BaseScraper
from db_client import ScrapedItem
import config


class YouTubeScraper(BaseScraper):
    source_type = "youtube"
    SEARCH_API = "https://www.googleapis.com/youtube/v3/search"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        api_key = os.environ.get("YOUTUBE_API_KEY", "")
        if not api_key:
            return []
        return self._scrape_via_api(wine_id, wine_name_ko, api_key)

    def _scrape_via_api(self, wine_id: int, query: str, api_key: str) -> list[ScrapedItem]:
        self._wait_rate_limit()
        try:
            resp = requests.get(
                self.SEARCH_API,
                params={
                    "part": "snippet",
                    "q": query,
                    "type": "video",
                    "maxResults": config.MAX_RESULTS_PER_SOURCE,
                    "relevanceLanguage": "ko",
                    "key": api_key,
                },
                headers=config.HEADERS,
                timeout=config.REQUEST_TIMEOUT,
            )
            self._last_request_time = time.monotonic()
        except requests.RequestException:
            return []
        if not resp.ok:
            return []
        items = []
        for video in resp.json().get("items", []):
            vid_id = video.get("id", {}).get("videoId")
            if not vid_id:
                continue
            snippet = video["snippet"]
            thumbnail = snippet.get("thumbnails", {}).get("medium", {}).get("url")
            summary = self._get_transcript_summary(vid_id) or self.truncate_summary(snippet.get("description", "")) or None
            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=f"https://www.youtube.com/watch?v={vid_id}",
                title=snippet.get("title", ""),
                summary=summary,
                publishedAt=snippet.get("publishedAt", "")[:10] or None,
                thumbnailUrl=thumbnail,
                extra={"channelTitle": snippet.get("channelTitle", "")},
            ))
        return items

    def _get_transcript_summary(self, video_id: str) -> Optional[str]:
        try:
            from youtube_transcript_api import YouTubeTranscriptApi
            transcript = YouTubeTranscriptApi.get_transcript(video_id, languages=["ko", "en"])
            full_text = " ".join(t["text"] for t in transcript)
            return self.truncate_summary(full_text)
        except Exception:
            return None
