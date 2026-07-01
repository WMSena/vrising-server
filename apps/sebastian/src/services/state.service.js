import mongoose from 'mongoose';
import { connectMongo } from "./database.service.js";
await connectMongo();

export default {

    async load() {
        try {
            const rawCollection = mongoose.connection.db.collection('players');
            const docs = await rawCollection
                .find({'online': true})
                .project({ _id: 0 }) 
                .toArray();

            return docs;
        } catch {
            return [];
        }
    },
    async totalPlayerCount() {
        try {
            const rawCollection = mongoose.connection.db.collection('players');
            const docs = await rawCollection
                .find()
                .project({ _id: 1 }) 
                .toArray();

            return docs.length;
        } catch {
            return [];
        }
    }
};