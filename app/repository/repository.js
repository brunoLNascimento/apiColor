const { limit } = require("../config/config");
const mongoose = require('mongoose');
const Color = mongoose.model('Color');
mongoose.set('debug', true)

module.exports = {
    async findBy(query, skip){
        return await Color.find(query).limit(limit).skip(skip);
    }, 

    savePokemon(pokemon){
        pokemon.save(function (err, response){
            if(err) console.log("Erro ao salvar pokemon: " + err);
        })
    }
}
