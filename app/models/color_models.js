const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const color = new Schema({
    name :  { type: String },
    idPokemon: { type: Number },
    types : [{
        name : { type: String },
        color :  { type: String }
    }]
});

color.set('toJSON', {
    getters: true,
    virtuals: true
})

mongoose.model('Color', color);