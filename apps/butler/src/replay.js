import fs from "fs";
import readline from "readline";

import { parseLine } from "./parser.js";

export async function replayLog(logFile) {

    console.log("[Replay] Loading previous log...");
    const stream = fs.createReadStream(logFile);
    const reader = readline.createInterface({
        input: stream,
        crlfDelay: Infinity
    });
    let count = 0;
    for await (const line of reader) {
        parseLine(line);
        count++;
    }
    console.log(`[Replay] ${count} lines processed.`);
}