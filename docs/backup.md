# Backup

## Purpose

This document explains how to create and restore backups of the V Rising server.

Only the persistent data needs to be backed up.

The dedicated server binaries can always be downloaded again by Docker.

---

## Manual Backup

Run:

```bash
./scripts/backup.sh
```

The backup script will:

1. Stop the server
2. Archive the persistent directory
3. Store the archive
4. Restart the server

---

## Backup Location

Manual backups are stored inside:

```
backups/manual/
```

Example:

```
Azeroth-2026-06-30_11-10-52.tar.gz
```

---

## Restore Backup

Run:

```bash
./scripts/restore.sh
```

Extract the backup into:

```
data/persistent/
```

Start the server again.

```bash
docker compose up -d
```

---

## What Should Be Backed Up?

Always back up:

```
data/persistent/
```

This includes:

- Saves
- Server Settings
- Logs
- Player Data

Do NOT back up:

```
data/server/
```

Docker will automatically regenerate this directory when necessary.

---

## Best Practices

It is recommended to create a backup:

- Before updating Docker images
- Before changing server settings
- Before migrating servers
- Before major V Rising updates

Keeping multiple backup generations is also recommended.