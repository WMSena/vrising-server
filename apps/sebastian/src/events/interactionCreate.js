import logger from "../utils/logger.js";

export default {

    name: "interactionCreate",

    async execute(interaction, client) {

        if (!interaction.isChatInputCommand())
            return;

        const command = client.commands.get(
            interaction.commandName
        );

        if (!command) {

            logger.warning(
                `Unknown command: ${interaction.commandName}`
            );

            return;

        }

        try {

            await command.execute(interaction, client);

        } catch (error) {

            logger.error(error.stack);

            if (interaction.replied || interaction.deferred) {

                await interaction.followUp({
                    content: "❌ Something went wrong.",
                    ephemeral: true
                });

            } else {

                await interaction.reply({
                    content: "❌ Something went wrong.",
                    ephemeral: true
                });

            }

        }

    }

};