import { exec } from "child_process";
import { promisify } from "util";

import Runner from "./runner.js";

const execute = promisify(exec);

export default class LocalRunner extends Runner {

    async exec(command) {

        try {

            const { stdout, stderr } = await execute(command);

            return {
                success: true,
                stdout: stdout.trim(),
                stderr: stderr.trim()
            };

        } catch (error) {

            return {
                success: false,
                stdout: "",
                stderr: error.message
            };

        }

    }

}