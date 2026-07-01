import fs from "fs/promises";

import config from "./config.js";

export async function loadState() {

    const raw = await fs.readFile(
        config.stateFile,
        "utf8"
    );

    return JSON.parse(raw);

}

export async function saveState(state) {

    await fs.writeFile(
        config.stateFile,
        JSON.stringify(state, null, 4)
    );

}