export default {
    name: "clientReady",
    once: true,

    async execute(client) {
        console.log("");
        console.log("==============================");
        console.log(" Sebastian Online");
        console.log("==============================");
        console.log(`User : ${client.user.tag}`);
        console.log(`Guilds : ${client.guilds.cache.size}`);
        console.log("==============================");
        console.log("");
    }
};