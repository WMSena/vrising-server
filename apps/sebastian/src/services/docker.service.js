import { exec } from "child_process";
import { promisify } from "util";

import runner from "../runners/index.js";

export default {


    async status(container) {

        const result = await runner.exec(
            `docker inspect -f "{{.State.Status}}" ${container}`
        );

        return {

            ...result,

            state: result.stdout.trim()

        };

    },

    async start(container) {

        return runner.exec(
            `docker start ${container}`
        );

    },

    async stop(container) {

        return runner.exec(
            `docker stop ${container}`
        );

    },

    async restart(container) {

        return runner.exec(
            `docker restart ${container}`
        );

    },

    async ps() {

        return runner.exec(
            `docker ps`
        );

    }

};