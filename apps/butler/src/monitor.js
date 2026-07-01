import config from "./config.js";

import { loadState, saveState } from "./state.js";

import { replayLog } from "./replay.js";

import { parseLine } from "./parser.js";

import TailRunner from "./runners/tail.runner.js";

import { getLatestLog } from "./helpers/log.helper.js";

export async function startMonitor() {

    console.log("[1/3] Loading state...");

    const state = await loadState();

    console.log("[2/3] Replaying log...");

    const logFile = await getLatestLog(
        config.logDirectory
    );

    await replayLog(
        logFile,
        state
    );

    await saveState(state);

    console.log("[3/3] Following live log...");

    const runner = new TailRunner(logFile);

    let timer;

    runner.on("line", (line) => {

        parseLine(line, state);

        clearTimeout(timer);

        timer = setTimeout(async () => {

            state.server.lastUpdate =
                new Date().toISOString();

            await saveState(state);

        }, 1000);

    });

    runner.start();

}