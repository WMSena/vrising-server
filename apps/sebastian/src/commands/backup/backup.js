import { SlashCommandBuilder } from "discord.js";

export default {

    data: new SlashCommandBuilder()
        .setName("backup")
        .setDescription("Create a manual backup."),

    async execute(interaction) {

        await interaction.reply({

            content:
                "📦 Backup system not implemented yet.",

            ephemeral: true

        });

    }

};