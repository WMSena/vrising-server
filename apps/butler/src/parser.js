const CONNECT_REGEX =
/Character: '(.+?)' connected/;

const DISCONNECT_REGEX =
/User '\{Steam .*?\}' disconnected/;

export function parseLine(line, state) {

    const connect = line.match(CONNECT_REGEX);

    if (connect) {

        const player = connect[1];

        if (
            !state.players.find(
                p => p.name === player
            )
        ) {

            state.players.push({

                name: player,
                connectedAt:
                    new Date().toISOString()

            });

        }

    }

    if (DISCONNECT_REGEX.test(line)) {

        /**
         * We'll improve this later.
         * Need SteamID mapping.
         */

    }

}