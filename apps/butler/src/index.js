import { startMonitor } from "./monitor.js";
import { connectMongo } from './helpers/database.helper.js';

console.log("================================");
console.log(" Butler Started");
console.log("================================");

async function SyncedDatabase() {
    var i = 0;

    await connectMongo()
    .then(() => {
        i++;
        console.log("MongDB Connection Established");
    })
    .catch((err) => {
        console.log("MongDB Connection Failed: " + err);
    });
    
    return i;
}

async function mainModule() {
    var syncedCount = await SyncedDatabase();
    if (syncedCount == 1) {
        await startMonitor();
    }
}

await mainModule()