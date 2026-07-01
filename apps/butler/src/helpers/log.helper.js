import fs from "fs/promises";
import path from "path";

export async function getLatestLog(directory) {

    const files = await fs.readdir(directory);

    const logs = files
        .filter(file => file.endsWith(".log"))
        .sort();

    if (!logs.length)
        throw new Error("No log file found.");

    return path.join(
        directory,
        logs.at(-1)
    );

}