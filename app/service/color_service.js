const mongoose = require('mongoose');
const Color = mongoose.model('Color');
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
    let color = new Color({
        name :  body.name,
        idPokemon: body.id,
        types : body.type
    })

    return color;
}

function colorRandom(body){
    body.type.forEach(element => {
        element.color = getColor(element.name);
        console.log(element)
    });
    return body;
}
