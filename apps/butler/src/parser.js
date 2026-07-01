const CONNECT_REGEX =
/User '\{Steam (\d+)\}' '(\d+)'.*?Character: '(.+?)' connected/;

const DISCONNECT_REGEX =
/User '\{Steam (\d+)\}' disconnected/;

export function parseLine(line, state) {

    const connect = line.match(CONNECT_REGEX);

    if (connect) {
        const connectionId = connect[1];
        const steamId = connect[2];
        const character = connect[3];

        if (
            !state.players.some(
                player => player.steamId === steamId
            )
        ) {

            state.players.push({
                connectionId,
                steamId,
                character,
                connectedAt: new Date().toISOString()
            });

            console.log(`+ ${character}`);

        }

        return;

    }

    const disconnect = line.match(DISCONNECT_REGEX);

    if (disconnect) {
        const connectionId = disconnect[1];
        state.players = state.players.filter(
            player => player.connectionId !== connectionId
        );

        console.log(`- Player ${connectionId} disconnected`);

    }

}