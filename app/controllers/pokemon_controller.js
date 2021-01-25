const { findPokemon, findPokemonBy, deletePokemon } = require("../service/pokemon_service");

module.exports = {
    async findPokemon(req, res){
        /**
         * #swagger.tags = ['findPokemon'] 
         * #swagger.description = 'Endpoint para buscar Pokemon na base'
         * #swagger.parameters['name'] = { description: 'Nome do pokemon.' }
         * #swagger.parameters['id'] = { description: 'ID do pokemon.' }
        */
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
        /**
         * #swagger.tags = ['findAllPokemon'] 
         * #swagger.description = 'Endpoint para buscar todos os Pokemon na base, limite de resultado por página 10'
         * #swagger.parameters['page'] = { description: 'Não obrigatório, caso não seja enviado nenhum número: setado página 0' }
        */
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
        /**
         * #swagger.tags = ['delete'] 
         * #swagger.description = 'Endpoint para deletar o Pokemon: pode ser enviado ID ou nome'
        */
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