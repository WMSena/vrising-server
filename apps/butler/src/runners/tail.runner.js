import { spawn } from "child_process";
import { EventEmitter } from "events";

export default class TailRunner extends EventEmitter {

    constructor(filePattern) {

        super();

        this.filePattern = filePattern;
        this.process = null;
        this.buffer = "";

    }

    start() {

        this.process = spawn(

            "tail",

            [
                "-F",
                "$(ls -t " + this.filePattern + " | head -1)"
            ],

            {
                shell: true
            }

        );

        this.process.stdout.on(

            "data",

            (chunk) => {

                this.buffer += chunk.toString();

                const lines = this.buffer.split("\n");

                this.buffer = lines.pop();

                for (const line of lines) {
                    if (line.trim() !== "") {

                        this.emit("line", line);

                    }

                }

            }

        );

        this.process.stderr.on(

            "data",

            (data) => {

                this.emit(
                    "error",
                    data.toString()
                );

            }

        );

        this.process.on(

            "close",

            (code) => {

                this.emit("close", code);

            }

        );

    }

    stop() {

        if (this.process) {

            this.process.kill();

        }

    }

}