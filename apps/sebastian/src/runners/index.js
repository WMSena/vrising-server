import LocalRunner from "./local.runner.js";
import SSHRunner from "./ssh.runner.js";

const runner =
    process.env.RUNNER === "ssh"
        ? new SSHRunner()
        : new LocalRunner();

export default runner;