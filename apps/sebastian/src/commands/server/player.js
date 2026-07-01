import { SlashCommandBuilder } from "discord.js";

import stateService from "../../services/state.service.js";

export default {

    data: new SlashCommandBuilder()

        .setName("players")
        .setDescription("Show currently online players."),

    async execute(interaction) {

        const state = await stateService.load();

        if (state.length === 0) {

            return interaction.reply({

                embeds: [

                    {

                        title: "🦇 Online Players",

                        description:
                            "Nobody is currently online.",

                        color: 0x808080

                    }

                ]

            });

        }
        console.log(state);

        const description = state.map(
            (player, index) =>`${index + 1}. **${player.character}**`
        ).join("\n");

        console.log(description)
        const totalPlayerCount = await stateService.totalPlayerCount();

        await interaction.reply({
            embeds: [
                {
                    title: "🦇 Online Players",
                    description,
                    color: 0x57F287,
                    footer: {
                        text: `${state.length} player(s) online out of ${totalPlayerCount} total`
                    }
                }
            ]
        });

    }

};