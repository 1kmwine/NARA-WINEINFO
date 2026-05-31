# scripts/scraper/sources/claude_search_client.py
import json
import os
import re
from datetime import date, timedelta
from typing import Any, Dict, List, Optional


def _yesterday() -> str:
    return (date.today() - timedelta(days=1)).strftime("%Y-%m-%d")


def search_wine_claude(
    query: str,
    site_filter: Optional[str] = None,
    use_date_filter: bool = True,
    max_results: int = 5,
) -> List[Dict[str, Any]]:
    """
    Search using Claude's web_search_20250305 tool via Anthropic API.
    Requires ANTHROPIC_API_KEY env var. Returns [] if key is absent or on any error.
    Each result: {"title": str, "url": str, "summary": str}
    """
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        return []

    try:
        import anthropic  # type: ignore
    except ImportError:
        return []

    search_query = query
    if use_date_filter:
        search_query = f"{query} after:{_yesterday()}"
    if site_filter:
        search_query = f"site:{site_filter} {search_query}"

    prompt = (
        f'"{search_query}" 검색 후, 결과를 JSON 배열로만 반환해줘. '
        f'형식: [{{"title": "제목", "url": "https://...", "summary": "요약"}}]. '
        f'다른 설명 없이 JSON 배열만. 최대 {max_results}개. 실제 페이지 URL 필수.'
    )

    try:
        client = anthropic.Anthropic(api_key=api_key)
        response = client.messages.create(
            model="claude-haiku-4-5",
            max_tokens=2048,
            tools=[{"type": "web_search_20250305", "name": "web_search", "max_uses": 3}],
            messages=[{"role": "user", "content": prompt}],
        )

        results: List[Dict[str, Any]] = []
        for block in response.content:
            if getattr(block, "type", None) == "text":
                text = block.text
                match = re.search(r'\[.*?\]', text, re.DOTALL)
                if match:
                    try:
                        items = json.loads(match.group())
                        for item in items:
                            if isinstance(item, dict) and item.get("url"):
                                results.append({
                                    "title": str(item.get("title", "")),
                                    "url": str(item.get("url", "")),
                                    "summary": str(item.get("summary", "")),
                                })
                    except (json.JSONDecodeError, ValueError):
                        pass
                break

        return results[:max_results]
    except Exception:
        return []
