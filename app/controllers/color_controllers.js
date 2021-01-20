const mongoose = require('mongoose');
const Color = mongoose.model('Color')

module.exports = {
    async findPokemon(req, res){
        try {
            Color.find({ id: req.params.pokemon}, function (err, response){
                if(err){
                    return res.status(500).send({message: "Erro ao consultar menu"})
                }
                if(response.length){
                    return res.status(200).send(response) 
                }else{
                    return res.status(403).send({message: "Prato não encontrado!"})
                }
            })
        } catch (error) {
            return res.send("error")
        }
    },

    async findcolor(req, res){
        try {
            throw false
        } catch (error) {
            return res.send(false)
        }
    }
}