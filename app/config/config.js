const config = {
    db: {
        url: 'mongodb+srv://brunoNascimento:brunoNascimento@app.nbcye.mongodb.net/test?retryWrites=true&w=majority',
        options: {
            server: {
                
                socketOptions: {keepAlive: 1},
                auto_reconnect: true
            }
        }
    }
}

module.exports = config;