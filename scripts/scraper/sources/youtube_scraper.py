# scripts/scraper/sources/youtube_scraper.py
import scrapetube
from typing import Optional
from base_scraper import BaseScraper
from db_client import ScrapedItem
import config


class YouTubeScraper(BaseScraper):
    source_type = "youtube"

    def scrape_wine(self, wine_id: int, wine_slug: str, wine_name_ko: str) -> list[ScrapedItem]:
        self._wait_rate_limit()
        query = wine_name_ko + " 와인"
        try:
            videos = scrapetube.get_search(query, limit=config.MAX_RESULTS_PER_SOURCE)
        except Exception:
            return []
        items = []
        for video in videos:
            vid_id = video.get("videoId")
            if not vid_id:
                continue
            title = video.get("title", {}).get("runs", [{}])[0].get("text", "")
            thumbnail = video.get("thumbnail", {}).get("thumbnails", [{}])[-1].get("url")
            description = (
                video.get("detailedMetadataSnippets", [{}])[0]
                .get("snippetText", {})
                .get("runs", [{}])[0]
                .get("text", "")
            )
            summary = (
                self._get_transcript_summary(vid_id)
                or self.truncate_summary(description)
                or None
            )
            items.append(ScrapedItem(
                wineId=wine_id,
                sourceType=self.source_type,
                url=f"https://www.youtube.com/watch?v={vid_id}",
                title=title,
                summary=summary,
                publishedAt=None,  # scrapetube returns relative time ("2 years ago"), not ISO date
                thumbnailUrl=thumbnail,
                extra={},
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
