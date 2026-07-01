# Troubleshooting

This document lists common problems and their solutions.

---

## Cannot Connect to Server

### Symptoms

- Connection Timeout
- Server does not appear online

### Possible Causes

- Incorrect server IP
- Incorrect port
- Firewall blocking UDP ports
- Server is not running

### Solution

Verify the container.

```bash
docker compose ps
```

Check server logs.

```bash
docker compose logs -f
```

Verify UDP ports.

```bash
ss -lun | grep 270
```

Check firewall status.

```bash
ufw status
```

Connect using:

```
Server-IP:27015
```

Use **Direct Connect** instead of **Continue** after migrating an existing server.

---

## Container Will Not Start

Check Docker logs.

```bash
docker compose logs
```

Validate the compose file.

```bash
docker compose config
```

Restart Docker if necessary.

```bash
systemctl restart docker
```

---

## Save File Not Loaded

Verify the save directory exists.

```
data/persistent/Saves/v4/<SaveName>
```

Open:

```
data/persistent/Settings/ServerHostSettings.json
```

Verify:

```
SaveName
```

matches the save folder.

---

## Backup Failed

Ensure there is enough disk space.

```bash
df -h
```

Verify permissions.

```bash
ls -l scripts/
```

Make backup scripts executable.

```bash
chmod +x scripts/*.sh
```

---

## Permission Denied

If a script returns:

```
Permission denied
```

Run:

```bash
chmod +x scripts/*.sh
```

---

## Docker Image Update

Update the Docker image.

```bash
docker pull trueosiris/vrising:latest
```

Restart the server.

```bash
docker compose up -d
```

---

## Useful Commands

View running containers.

```bash
docker ps
```

View logs.

```bash
docker compose logs -f
```

Restart server.

```bash
./scripts/restart.sh
```

Stop server.

```bash
./scripts/stop.sh
```

Start server.

```bash
./scripts/start.sh
```