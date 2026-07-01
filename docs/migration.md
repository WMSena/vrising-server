# Migration

## Purpose

This guide explains how to migrate an existing V Rising dedicated server to this Docker-based environment without losing world progress.

---

## Before You Start

Always create a backup of your existing server before migrating.

The following folders are required from the old server:

```
save-data/
├── Saves/
└── Settings/
```

---

## Upload Existing Save

Compress the existing `save-data` folder.

Upload it to the VPS using FTP or SCP.

Example destination:

```
/opt/vrising-server/
```

Extract the archive after uploading.

---

## Copy Save Files

Copy the existing save directory into the persistent folder.

```
save-data/Saves/
        ↓
data/persistent/Saves/
```

---

## Copy Server Settings

Copy every file inside:

```
save-data/Settings/
```

to

```
data/persistent/Settings/
```

This includes:

- ServerHostSettings.json
- adminlist.txt
- banlist.txt
- tempbanlist.txt
- servermutechatlist.txt
- servermutevoicelist.txt

---

## Verify Save Name

Open:

```
data/persistent/Settings/ServerHostSettings.json
```

Verify that:

```
SaveName
```

matches the save folder.

Example:

```
SaveName = Azeroth
```

Folder:

```
data/persistent/Saves/v4/Azeroth/
```

Both values must match.

---

## Start Server

Start the container.

```bash
docker compose up -d
```

---

## Verify Migration

Watch the logs.

```bash
docker compose logs -f
```

If migration is successful you should see:

- Startup Completed
- AutoSave
- PersistenceV2

The server should begin creating new autosaves.

---

## Connect to the Server

Use Direct Connect.

```
Server-IP:27015
```

Do not use Continue immediately after migration because the game may still attempt to connect to the old server.