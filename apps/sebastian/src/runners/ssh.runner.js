import fs from "fs";
import { Client } from "ssh2";

import Runner from "./runner.js";

export default class SSHRunner extends Runner {

    async exec(command) {

        return new Promise((resolve) => {

            const conn = new Client();

            conn.on("ready", () => {

                conn.exec(command, (err, stream) => {

                    if (err) {

                        conn.end();

                        return resolve({
                            success: false,
                            stdout: "",
                            stderr: err.message
                        });

                    }

                    let stdout = "";
                    let stderr = "";

                    stream.on("close", () => {

                        conn.end();

                        resolve({
                            success: stderr.length === 0,
                            stdout: stdout.trim(),
                            stderr: stderr.trim()
                        });

                    });

                    stream.on("data", (data) => {
                        stdout += data.toString();
                    });

                    stream.stderr.on("data", (data) => {
                        stderr += data.toString();
                    });

                });

            });

            conn.on("error", (err) => {

                resolve({
                    success: false,
                    stdout: "",
                    stderr: err.message
                });

            });

            conn.connect({
                host: process.env.SSH_HOST,
                port: Number(process.env.SSH_PORT),
                username: process.env.SSH_USER,
                privateKey: fs.readFileSync(process.env.SSH_PRIVATE_KEY)
            });

        });

    }

}