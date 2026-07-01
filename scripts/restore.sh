#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "Available backups:"

ls -1 backups/manual/*.tar.gz

echo
read -p "Enter backup filename: " BACKUP

docker compose stop

tar -xzf "backups/manual/$BACKUP" \
    -C "$PROJECT_DIR/data/persistent"

docker compose start

echo "Restore complete."