const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const pokemonModel = new Schema({
    name:  { type: String },
    idPokemon: { type: Number },
    types: []
});

pokemonModel.set('toJSON', {
    transform: function( doc, ret ){   
        return ret = { 
            name: ret.name,
            id: ret.idPokemon,
            types: ret.types
        }
    },
    getters: true,
    virtuals: true
})



mongoose.model('PokemonModel', pokemonModel);