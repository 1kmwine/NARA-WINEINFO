#!/bin/bash
# push-to-git.sh — 로컬 변경사항을 깃에 푸시
set -e

cd "$(dirname "$0")"

echo "=== 변경된 파일 ==="
git status --short

echo ""
read -p "커밋 메시지 입력 (엔터 = 'update'): " MSG
MSG="${MSG:-update}"

git add -A
git commit -m "$MSG"
git push origin main

echo ""
echo "✅ 푸시 완료!"
