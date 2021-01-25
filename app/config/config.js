const config = {
    db: {
        url: 'mongodb://localhost:27017/pokemon',
        urlTest: 'mongodb://localhost:27017/pokemonTest',
        options: {
            server: {
                socketOptions: {keepAlive: 1},
                auto_reconnect: true
            }
        }
    },
    limit: 10
}

module.exports = config;