export default {

    docker: {
        vrising: "vrising",
    },
    mongo: {
        uri: process.env.MONGO_URI
    },
    backup: {
        directory: "/opt/vrising-server/backups/manual",
    },
    log: {
        file: "/opt/vrising-server/data/persistent/latest.log"
    }

};