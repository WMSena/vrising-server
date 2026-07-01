# Astaroth - V Rising Dedicated Server

A Docker-based V Rising Dedicated Server running based on docker image from [TrueOsiris/docker-vrising](https://github.com/TrueOsiris/docker-vrising).

This repository contains the complete infrastructure required to deploy, maintain, and back up a V Rising server while keeping game data separate from configuration.

---

## Features

- Docker-based deployment
- Persistent save storage
- Automated backup scripts
- Easy migration between servers
- Git version controlled infrastructure
- Ready for future monitoring and Discord integration

---

## Requirements

- Ubuntu 20.04 LTS or newer
- Docker Engine
- Docker Compose Plugin
- [TrueOsiris/docker-vrising](https://github.com/TrueOsiris/docker-vrising) Docker Image

---

## Project Structure

### Directory Overview

| Folder Name          | Description                                                                                                         |
| ---------------------|---------------------------------------------------------------------------------------------------------------------|
| backups              | Stores manual and automated backups of the server's persistent data.                                                |
| data/persistent      | Stores world saves, server settings, logs, and other persistent game data.                                          |
| data/server          | Stores the V Rising dedicated server binaries. This directory is automatically populated by the Docker container.   |
| docs                 | Contains project documentation, installation guides, migration guides, and troubleshooting notes.                   |
| script               | Contains helper scripts for managing the server and backups.                                                        |

---

## Getting Started

See [docs/installation.md](docs/installation.md) for the complete installation guide.

---

## Common Commands

### Start Server

```bash
./scripts/start.sh
```

### Stop Server

```bash
./scripts/stop.sh
```

### Restart Server

```bash
./scripts/restart.sh
```

---


## Docker Image

This project uses the Docker image maintained by TrueOsiris.

Current image:

trueosiris/vrising:latest

---

## Documentation

Additional documentation is available in the `docs/` directory.

- installation.md
- migration.md
- backup.md
- troubleshooting.md

---

## Future Improvements

Planned features include:

- Automated scheduled backups
- Backup rotation
- Health monitoring
- Discord bot integration
- Prometheus & Grafana monitoring
- Automatic Docker image updates