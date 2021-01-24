const randomHexColor = require('random-hex-color');

module.exports = {
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
