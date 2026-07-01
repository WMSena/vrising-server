export default {

    async status() {

        const docker = await dockerService.status(config.docker.vrising);

        return {

            online: docker.state === "running",

            container: docker.state

        };

    }

};