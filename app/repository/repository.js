const { limit } = require("../config/config");
const mongoose = require('mongoose');
const PokemonModel = mongoose.model('PokemonModel');
mongoose.set('debug', true)

module.exports = {
    async findBy(query, skip){
        return await PokemonModel.find(query).limit(limit).skip(skip);
    }, 

    savePokemon(pokemon){
        pokemon.save(function (err, response){
            if(err) console.log("Erro ao salvar pokemon: " + err);
        })
    },

    async deletePokemon(query){
        return await PokemonModel.findOneAndDelete(query);
    }
}
