const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const color = new Schema({
    name:  { type: String },
    idPokemon: { type: Number },
    types: []
});

color.set('toJSON', {
    transform: function( doc, ret ){   
        return ret = { 
            name: ret.name,
            idPokemon: ret.idPokemon,
            types: ret.types
        }
    },
    getters: true,
    virtuals: true
})



mongoose.model('Color', color);