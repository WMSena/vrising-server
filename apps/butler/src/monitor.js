import TailRunner from "./runners/tail.runner.js";

import config from "./config.js";

import { loadState, saveState } from "./state.js";
import { parseLine } from "./parser.js";

export async function startMonitor() {

    // Load existing state.json
    const state = await loadState();

    const runner = new TailRunner(
        config.logFile
    );

    runner.on("line", async (line) => {

        parseLine(line, state);

        state.server.online = true;
        state.server.lastUpdate = new Date().toISOString();

        await saveState(state);

    });

    runner.on("error", (error) => {

        console.error(error);

    });

    runner.on("close", (code) => {

        console.log(`TailRunner exited (${code})`);

    });

    runner.start();

}