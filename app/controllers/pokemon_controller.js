const { findPokemon } = require("../service/pokemon_service");

module.exports = {
    async findPokemon(req, res){
        try {
            let pokemon = req.params.pokemon;
            let found = await findPokemonBy(pokemon);
            return res.status(200).send(found);
        } catch (error) {
            return res.send(error);
        }
    },

    async findAllPokemon(req, res){
        try{
            let page = parseInt(req.params.page);
            let found = await findPokemon(page);
            return res.status(200).send(found);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}