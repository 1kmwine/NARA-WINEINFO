#!/usr/bin/env python3
"""
Usage:
  python main.py --all                              # 전체 와인 배치 처리
  python main.py --slug chateau-margaux             # 단일 와인 슬러그
  python main.py --all --batch-size 20              # 배치 크기 조정 (기본 50)
"""
import argparse
import sys
import time
import requests
import config
from db_client import save_scraped_data
from sources.naver_blog import NaverBlogScraper
from sources.naver_cafe import NaverCafeScraper
from sources.youtube_scraper import YouTubeScraper
from sources.instagram_scraper import InstagramScraper
from sources.wine_searcher import WineSearcherScraper
from sources.winery_official import WineryOfficialScraper
from sources.article_scraper import ArticleScraper

SCRAPERS = [
    NaverBlogScraper(),
    NaverCafeScraper(),
    YouTubeScraper(),
    InstagramScraper(),
    WineSearcherScraper(),
    WineryOfficialScraper(),
    ArticleScraper(is_global=False),
    ArticleScraper(is_global=True),
]


def fetch_wines(page: int, page_size: int) -> list[dict]:
    resp = requests.get(
        f"{config.API_BASE_URL}/api/wines",
        params={"page": page, "pageSize": page_size, "isPublished": "true"},
        headers=config.HEADERS,
        timeout=config.REQUEST_TIMEOUT,
    )
    if not resp.ok:
        print(f"[WARN] GET /api/wines page={page} → {resp.status_code}", file=sys.stderr)
        return []
    data = resp.json()
    return data.get("data", [])


def process_wine(wine: dict) -> int:
    wine_id = wine["id"]
    slug = wine.get("slug", str(wine_id))
    name_ko = wine.get("nameKo", slug)
    winery_url = wine.get("winery", {}).get("websiteUrl", "") if wine.get("winery") else ""

    saved = 0
    for scraper in SCRAPERS:
        try:
            if scraper.source_type == "winery_official":
                items = scraper.scrape_winery_url(wine_id, winery_url, name_ko)
            else:
                items = scraper.scrape_wine(wine_id, slug, name_ko)
            for item in items:
                try:
                    save_scraped_data(item)
                    saved += 1
                except RuntimeError as e:
                    print(f"[WARN] save failed for {item.url}: {e}", file=sys.stderr)
        except Exception as e:
            print(f"[ERROR] {scraper.source_type} process_wine({wine_id}): {e}", file=sys.stderr)
    return saved


def run_all(batch_size: int):
    page = 1
    total_wines = 0
    total_saved = 0
    while True:
        wines = fetch_wines(page, batch_size)
        if not wines:
            break
        print(f"[INFO] Processing page {page} ({len(wines)} wines)")
        for wine in wines:
            n = process_wine(wine)
            total_wines += 1
            total_saved += n
            print(f"  [{total_wines}] {wine.get('slug', wine.get('id', '?'))} → {n} items saved")
        page += 1
        time.sleep(0.1)
    print(f"[DONE] {total_wines} wines, {total_saved} items saved")


def run_single(wine_slug: str):
    resp = requests.get(
        f"{config.API_BASE_URL}/api/wines/{wine_slug}",
        headers=config.HEADERS,
        timeout=config.REQUEST_TIMEOUT,
    )
    if not resp.ok:
        print(f"[ERROR] Wine '{wine_slug}' not found", file=sys.stderr)
        sys.exit(1)
    wine = resp.json()
    n = process_wine(wine)
    print(f"[DONE] {wine.get('slug', wine_slug)} → {n} items saved")


def main():
    parser = argparse.ArgumentParser(description="NARA WINEINFO 스크래퍼")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--all", action="store_true", help="전체 와인 스크래핑")
    group.add_argument("--slug", type=str, help="단일 와인 슬러그")
    parser.add_argument("--batch-size", type=int, default=50, help="페이지당 처리 와인 수")
    args = parser.parse_args()

    if not config.INTERNAL_API_KEY:
        print("[ERROR] INTERNAL_API_KEY 환경변수가 설정되지 않았습니다", file=sys.stderr)
        sys.exit(1)

    if args.all:
        run_all(args.batch_size)
    else:
        run_single(args.slug)


if __name__ == "__main__":
    main()
