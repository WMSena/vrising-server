const COLORS = {
    reset: "\x1b[0m",

    info: "\x1b[36m",
    success: "\x1b[32m",
    warning: "\x1b[33m",
    error: "\x1b[31m",
    debug: "\x1b[35m",
};

function timestamp() {
    return new Date().toLocaleString("en-GB", {
        hour12: false,
    });
}

function write(color, level, message) {
    console.log(
        `${color}[${timestamp()}] [${level}]${COLORS.reset} ${message}`
    );
}

export default {

    info(message) {
        write(COLORS.info, "INFO", message);
    },

    success(message) {
        write(COLORS.success, "SUCCESS", message);
    },

    warning(message) {
        write(COLORS.warning, "WARNING", message);
    },

    error(message) {
        write(COLORS.error, "ERROR", message);
    },

    debug(message) {
        write(COLORS.debug, "DEBUG", message);
    }

};