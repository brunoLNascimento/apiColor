const { savePokemon } = require("../repository/repository");

module.exports = { 
    async findcolor(body){
        try {
            colorRandom(body);
            let built = buildModel(body);
            savePokemon(built);
            return body;
        } catch (error) {
            
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

    return [body];
}