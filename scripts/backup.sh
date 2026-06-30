#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_DIR="$PROJECT_DIR/backups/manual"
BACKUP_FILE="$BACKUP_DIR/Azeroth-$TIMESTAMP.tar.gz"

mkdir -p "$BACKUP_DIR"

echo "Stopping server..."
docker compose stop

echo "Creating backup..."

tar -czf "$BACKUP_FILE" \
    -C "$PROJECT_DIR/data/persistent" \
    Saves Settings

echo "Starting server..."
docker compose start

echo
echo "Backup created:"
echo "$BACKUP_FILE"