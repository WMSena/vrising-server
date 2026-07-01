import "dotenv/config";

import client from "./client.js";

import loadEvents from "./loaders/event.loader.js";
import loadCommands from "./loaders/command.loader.js";

export default async function start() {

    await loadEvents(client);

    await loadCommands(client);

    await client.login(process.env.DISCORD_TOKEN);

}