#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_DIR="$PROJECT_DIR/backups/manual"
BACKUP_FILE="$BACKUP_DIR/Azeroth-$TIMESTAMP.tar.gz"

mkdir -p "$BACKUP_DIR"

echo "=================================="
echo " Astaroth Backup Utility"
echo "=================================="

echo "[1/4] Stopping server..."
docker compose down

echo "[2/4] Creating backup..."
tar -czf "$BACKUP_FILE" \
    -C "$PROJECT_DIR/data/persistent" \
    Saves Settings

echo "[3/4] Starting server..."
docker compose up -d

echo "[4/4] Backup complete!"

echo
echo "Saved as:"
echo "$BACKUP_FILE"