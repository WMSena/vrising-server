import dotenv from 'dotenv';
dotenv.config();

export default {
    docker: {
        vrising: "vrising"
    },
    mongo: {
        uri: process.env.MONGO_URI
    },
    backup: {
        directory: "/opt/vrising-server/backups/manual",
    }
};