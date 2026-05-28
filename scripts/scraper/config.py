"""
Configuration for NARA WINEINFO scrapers.
"""
import os
from dotenv import load_dotenv

load_dotenv()

# API base URL for saving scraped data
API_BASE_URL = os.getenv("NEXT_PUBLIC_BASE_URL", "http://localhost:3000")

# Request headers to avoid bot detection
DEFAULT_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    ),
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
}

# Naver search
NAVER_SEARCH_BASE = "https://search.naver.com/search.naver"
NAVER_BLOG_SEARCH = f"{NAVER_SEARCH_BASE}?where=post&query="
NAVER_CAFE_SEARCH = f"{NAVER_SEARCH_BASE}?where=article&query=site:cafe.naver.com/winerack24+"

# Wine-Searcher
WINE_SEARCHER_BASE = "https://www.wine-searcher.com/find/"

# YouTube
YOUTUBE_SEARCH_BASE = "https://www.youtube.com/results?search_query="

# Rate limiting (seconds between requests)
REQUEST_DELAY = 1.5
NAVER_DELAY = 2.0

# Max items to scrape per source per wine
MAX_ITEMS_PER_SOURCE = 10

# Timeout for HTTP requests (seconds)
REQUEST_TIMEOUT = 15
