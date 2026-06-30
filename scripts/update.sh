#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "Pulling latest Docker image..."

docker compose pull

echo "Restarting server..."

docker compose down
docker compose up -d

docker image prune -f

echo "Update complete."