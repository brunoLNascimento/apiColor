const mongoose = require('mongoose');
const Color = mongoose.model('Color');
const { savePokemon } = require("../repository/repository");
const randomColor = require("randomcolor");

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
        let color = typeColor(element.name)
        element.color = randomColor({ count: 1, hue: color});
    });

    return body;
}

function typeColor(name){
    let color;
    if(name == "water")
        color = "blue"
    else if(name == "grass")
        color = "green"
    else if(name == "fire")
        color = "red"
    else if(name == "flying")
        color = "blue"
    else if(name == "eletric")
        color = "yellow"
    else if( name == "poison")
        color = "purple"
    return color;
}