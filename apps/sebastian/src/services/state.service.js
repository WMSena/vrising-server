import fs from "fs/promises";

import config from "../config/index.js";

export default {

    async load() {

        try {

            const raw = await fs.readFile(
                config.butler.stateFile,
                "utf8"
            );

            return JSON.parse(raw);

        } catch {

            return {

                players: []

            };

        }

    }

};