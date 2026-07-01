// import config from "./config.js";
import config from "./config/index.js";
import { replayLog } from "./replay.js";
import { parseLine, parseServer } from "./parser.js";
import TailRunner from "./runners/tail.runner.js";
import { getLatestLog } from "./helpers/log.helper.js";

export async function startMonitor() {
    console.log("[1/2] Replaying log...");
    const logFile = await getLatestLog(
        config.log.file
    );
    await replayLog(logFile);

    console.log("[2/2] Following live log...");
    const runner = new TailRunner(logFile);

    let timer;
    runner.on("line", (line) => {
        parseLine(line);
        clearTimeout(timer);
        timer = setTimeout(async () => {
            parseServer('last-update',new Date().toISOString());
        }, 1000);
    });
    runner.start();
}