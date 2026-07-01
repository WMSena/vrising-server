import { SlashCommandBuilder } from "discord.js";

import serverService from "../../services/server.service.js";

export default {

    data: new SlashCommandBuilder()
        .setName("status")
        .setDescription("Show V Rising server status."),

    async execute(interaction) {

        const status = await serverService.status();

        await interaction.reply({

            embeds: [

                {
                    title: "🦇 Astaroth Server",

                    fields: [

                        {
                            name: "Container",
                            value: status.container,
                            inline: true,
                        },

                        {
                            name: "Online",
                            value: status.online
                                ? "🟢 Yes"
                                : "🔴 No",
                            inline: true,
                        }

                    ]

                }

            ]

        });

    }

};