const { findPokemon, findPokemonBy, deletePokemon } = require("../service/pokemon_service");

module.exports = {
    async findPokemon(req, res){
        try {
            let pokemon = req.params.pokemon;
            let found = await findPokemonBy(pokemon);
            return res.status(200).send(found);
        } catch (error) {
            console.log(error);
            return res.send(error);
        }
    },

    async findAllPokemon(req, res){
        try{
            let page = parseInt( req.params.page ? req.params.page : 0 );
            if(isNaN(page)) throw "Página deve ser númerico"
            let found = await findPokemon(page);
            return res.status(200).send(found);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error);
        }
    },

    async delete(req, res){
        try{
            let pokemon = req.params.pokemon;
            let response = await deletePokemon(pokemon);
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    }
}