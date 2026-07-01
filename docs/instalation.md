# Installation

## Purpose

This guide explains how to deploy the Astaroth V Rising Dedicated Server on a fresh Ubuntu VPS using Docker.

The installation process only needs to be completed once on a new server.

---

## Prerequisites

Before starting, ensure you have:

- Ubuntu 20.04 LTS or newer
- Root or sudo access
- Stable internet connection
- Git installed
- Docker Engine installed
- Docker Compose Plugin installed

---

## Clone Repository

Clone the repository into your preferred directory.

Example:

```bash
cd /opt
git clone https://github.com/<YOUR_USERNAME>/vrising-server.git
cd vrising-server
```

---

## Configure Environment

Copy the example environment file.

```bash
cp .env.example .env
```

Edit `.env` and configure the following values:

- Server Name
- Description
- Password
- Save Name
- Maximum Players
- Time Zone

---

## Start the Server

Start the Docker container.

```bash
docker compose up -d
```

The first startup may take several minutes because Docker will:

- Download the image
- Download the dedicated server
- Generate server files

---

## Verify Installation

Check that the container is running.

```bash
docker compose ps
```

View server logs.

```bash
docker compose logs -f
```

A successful startup should eventually display messages indicating that the server startup has completed.

---

## Directory Structure

After the first startup, the project structure should look similar to:

```
data/
├── server/
└── persistent/
    ├── Saves/
    └── Settings/
```

The `server` directory is generated automatically.

The `persistent` directory contains all save files and server settings.

---

## Connecting to the Server

Connect from V Rising using **Direct Connect**.

Example:

```
<Server-IP>:27015
```

Example:

```
103.xxx.xxx.xxx:27015
```

> Do not use "Continue" after migrating an existing world, as it may still reference the previous server address.