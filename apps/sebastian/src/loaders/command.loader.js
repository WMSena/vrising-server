import path from "path";
import { fileURLToPath } from "url";

import logger from "../utils/logger.js";
import { loadDirectory } from "../utils/loader.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function loadCommands(client) {

    client.commands = new Map();

    const commands = await loadDirectory(
        path.join(__dirname, "../commands")
    );

    for (const command of commands) {

        client.commands.set(
            command.data.name,
            command
        );

        logger.success(`Loaded Command: ${command.data.name}`);

    }

}