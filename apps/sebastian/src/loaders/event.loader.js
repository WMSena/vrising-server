import path from "path";
import { fileURLToPath } from "url";

import logger from "../utils/logger.js";
import { loadDirectory } from "../utils/loader.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function loadEvents(client) {

    const events = await loadDirectory(
        path.join(__dirname, "../events")
    );

    for (const event of events) {

        if (event.once) {

            client.once(
                event.name,
                (...args) => event.execute(...args, client)
            );

        } else {

            client.on(
                event.name,
                (...args) => event.execute(...args, client)
            );

        }

        logger.success(`Loaded Event: ${event.name}`);

    }

}