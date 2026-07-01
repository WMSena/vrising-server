import { exec } from "child_process";
import { promisify } from "util";

const execute = promisify(exec);

export default {

    async create() {

        return execute("../../scripts/backup.sh");

    },

    async restore(file) {

        return execute(
            `../../scripts/restore.sh "${file}"`
        );

    },

    async list() {

        return execute(
            "ls ../../backups/manual"
        );

    }

};