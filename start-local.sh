#!/bin/bash
# start-local.sh — 로컬 개발 서버 시작

BRANCH=$(git branch --show-current)
echo "▶ Pulling origin/$BRANCH ..."
git fetch origin "$BRANCH"
git checkout -- .
git pull origin "$BRANCH"

npm install

echo 'DATABASE_URL="file:./prisma/dev.db"' > .env

npm run db:push
npm run db:seed

npm run dev
