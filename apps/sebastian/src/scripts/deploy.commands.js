import "dotenv/config";

import path from "path";
import { fileURLToPath } from "url";

import {
    REST,
    Routes
} from "discord.js";

import { loadDirectory } from "../utils/loader.js";
import logger from "../utils/logger.js";

const __dirname = path.dirname(
    fileURLToPath(import.meta.url)
);

const commands = [];

const loadedCommands = await loadDirectory(
    path.join(__dirname, "../commands")
);

for (const command of loadedCommands) {

    commands.push(
        command.data.toJSON()
    );

}

const rest = new REST({
    version: "10"
}).setToken(
    process.env.DISCORD_TOKEN
);

try {

    logger.info("Registering slash commands...");

    await rest.put(

        Routes.applicationGuildCommands(
            process.env.CLIENT_ID,
            process.env.GUILD_ID
        ),

        {
            body: commands
        }

    );

    logger.success(
        `${commands.length} slash command(s) registered.`
    );

} catch (error) {

    logger.error(error.stack);

}