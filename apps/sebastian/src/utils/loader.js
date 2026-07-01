import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

async function walk(directory, modules = []) {

    const entries = fs.readdirSync(directory, {
        withFileTypes: true,
    });

    for (const entry of entries) {

        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {

            await walk(fullPath, modules);
            continue;

        }

        if (!entry.name.endsWith(".js"))
            continue;

        const imported = await import(
            pathToFileURL(fullPath).href
        );

        if (!imported.default) {
            throw new Error(
                `${entry.name} has no default export`
            );
        }

        modules.push(imported.default);

    }

    return modules;

}

export async function loadDirectory(directory) {
    return walk(directory);
}