#!/bin/bash
set -e

git pull origin main

npm install

echo 'DATABASE_URL="file:./prisma/dev.db"' > .env

npm run db:push
npm run db:seed

npm run dev
