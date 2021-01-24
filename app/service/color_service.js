const mongoose = require('mongoose');
const Color = mongoose.model('Color');
const { savePokemon } = require("../repository/repository");
const randomHexColor = require('random-hex-color');

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
    let color = new Color({
        name :  body.name,
        idPokemon: body.id,
        types : body.type
    })

    return color;
}

function colorRandom(body){
    body.type.forEach(element => {
        element.color = randomHexColor();
    });

    return body;
}