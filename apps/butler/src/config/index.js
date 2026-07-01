import dotenv from 'dotenv';
dotenv.config();
export default {
    mongo: {
        uri: process.env.MONGO_URI
    },
    log: {
        file: "/opt/vrising-server/data/persistent"
    }
};