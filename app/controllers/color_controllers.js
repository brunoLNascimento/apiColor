const mongoose = require('mongoose');
const Color = mongoose.model('Color')
mongoose.set('debug', true)
const randomHexColor = require('random-hex-color');

module.exports = {
    async findPokemon(req, res){
        try {
            let pokemon = req.params.pokemon;
            if(isNaN(pokemon))
                query = { name: pokemon }
            else
                query = { idPokemon: parseInt(pokemon)}

            Color.find(query, function (err, response){
                if(err)
                    return res.status(500).send({message: "Erro ao consultar menu"})
                else
                    return res.status(200).send(response) 
            })
        } catch (error) {
            return res.send("error")
        }
    },

    async findcolor(req, res){
        try {
            let body = colorRandom(req.body)
            let buildDoc = buildModel(body)
            
            res.status(200).send([body])

            buildDoc.save(function (err, response){
                if(err)
                    return res.status(500).send({message: "Erro ao consultar menu"})
                else{
                  //  return res.status(200).send([response]) 
                    //console.log("salvou")
                }
            })
        } catch (error) {
            return res.send(false)
        }
    },

    async findAllPokemon(req, res){
        try{

            let skip = parseInt(req.params.page * 10);
            Color.find({}, function (err, response){
            if(err)
                return res.status(500).send({message: "Erro ao consultar menu"})
            else
                return res.status(200).send(response) 
            }).limit(10).skip(skip)
        } catch (error) {
            return res.send("Deu ruim")
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

    return body
}
