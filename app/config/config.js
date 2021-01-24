const config = {
    db: {
        url: 'mongodb://localhost:27017/pokemon',
       // url: 'mongodb+srv://brunoNascimento:7hs%mSe5hinLRMc@app.nbcye.mongodb.net/desafioBrMall?retryWrites=true&w=majority',
        options: {
            server: {
                
                socketOptions: {keepAlive: 1},
                auto_reconnect: true
            }
        }
    }
}

module.exports = config;