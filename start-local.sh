#!/bin/bash
# start-local.sh — 로컬 개발 서버 시작
set -e

# .env 절대경로로 설정 (항상 덮어씀)
echo 'DATABASE_URL="file:/Users/jaeyungsong/NARA-WINEINFO/prisma/dev.db"' > .env

npm run dev
