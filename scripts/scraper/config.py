import os
from dotenv import load_dotenv

load_dotenv()

API_BASE_URL = os.environ.get("API_BASE_URL", "http://localhost:3000")
INTERNAL_API_KEY = os.environ.get("INTERNAL_API_KEY", "")

RATE_LIMITS = {
    "naver_blog": 1.0,
    "naver_cafe": 1.0,
    "youtube": 2.0,
    "instagram": 1.5,
    "wine_searcher": 0.5,
    "winery_official": 0.5,
    "article_kr": 0.5,
    "article_global": 0.5,
    "other": 0.5,
}

MAX_RESULTS_PER_SOURCE = 10
SUMMARY_MAX_CHARS = 300
REQUEST_TIMEOUT = 15
MAX_RETRIES = 3

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    )
}
