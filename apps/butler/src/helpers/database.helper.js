import mongoose from 'mongoose';
import config from "../config/index.js";

const dbURI = config.mongo.uri;

let isConnected = false;

export async function connectMongo() {
    if (isConnected) {
        return mongoose.connection;
    }

    try {
        await mongoose.connect(dbURI, {
            maxPoolSize: 10,
            minPoolSize: 2,
        });
        isConnected = true;
        return mongoose.connection;
    } catch (err) {
        throw err; // DO NOT exit process here
    }
}