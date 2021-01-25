const mongoose = require('mongoose');
const PokemonModel = mongoose.model('PokemonModel');
const { savePokemon } = require("../repository/repository");
const { getColor } = require("../helper/helper");

module.exports = { 
    async findcolor(body){
        try {
            colorRandom(body);
            let built = buildModel(body);
            savePokemon(built);
            return [body]; //ajustar
        } catch (error) {
            throw error;
        }
    }
}

function buildModel(body){
    let pokemon = new PokemonModel({
        name :  body.name,
        idPokemon: body.id,
        types : body.type
    })

    return pokemon;
}

function colorRandom(body){
    body.type.forEach(element => {
        element.color = getColor(element.name);
        console.log(element)
    });
    return body;
}
