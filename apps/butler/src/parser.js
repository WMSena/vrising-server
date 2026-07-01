import mongoose from 'mongoose';
const CONNECT_REGEX =
/User '\{Steam (\d+)\}' '(\d+)'.*?Character: '(.+?)' connected/;

const DISCONNECT_REGEX =
/User '\{Steam (\d+)\}' disconnected/;

export async function parseLine(line) {

    const connect = line.match(CONNECT_REGEX);

    if (connect) {
        const connectionId = connect[1];
        const steamId = connect[2];
        const character = connect[3];

        const rawCollection = mongoose.connection.db.collection('players');
        const docs = await rawCollection
            .find({'steamId' : steamId, 'character' : character})
            .project({ _id: 0 }) 
            .toArray();

        if (docs.length) {
            const insertResult = await rawCollection.updateOne(
                { steamId: steamId, character: character },
                { 
                    $set:{
                        steamId: steamId,
                        character: character,
                        connectionId: connectionId,
                        online : true,
                        connectedAt: new Date() // Note: You must add timestamps manually!
                    }
                }
            );
        }else{
            const insertResult = await rawCollection.insertOne({
                steamId: steamId,
                character: character,
                connectionId: connectionId,
                online : true,
                connectedAt: new Date() // Note: You must add timestamps manually!
            });
        }
        return;
    }

    const disconnect = line.match(DISCONNECT_REGEX);

    if (disconnect) {
        const connectionId = disconnect[1];

        const rawCollection = mongoose.connection.db.collection('players');
        const docs = await rawCollection
            .find({'connectionId' : connectionId})
            .project({ _id: 0 }) 
            .toArray();

        if (docs.length) {
            const insertResult = await rawCollection.updateOne(
                { connectionId: connectionId },
                { 
                    $set:{
                        online : false
                    }
                }
            );
        }
    }
}

export async function parseServer(key,value) {
    const rawCollection = mongoose.connection.db.collection('server');
    console.log("Updating server state: " + key + " = " + value);
    await rawCollection.updateOne(
        { key: key }, // 1. Filter
        { 
            $set: {
                value: value
            }
        },
        { upsert: true }                                     // 3. Option flag
    );
}