const { findBy, deletePokemon } = require("../repository/repository");

module.exports = { 
    async findPokemonBy(pokemon){
        try {
            let query = {};

            if(isNaN(pokemon))
                query = { name: pokemon }
            else
                query = { idPokemon: parseInt(pokemon)}
            
            return findBy(query);
        } catch (error) {
            throw error;            
        }
    },

    async findPokemon(page){
        try {
            let query = { };
            let skip = page * 10;            
            return await findBy(query, skip);
        } catch (error) {
            throw error;            
        }
    },

    async deletePokemon(pokemon){
        try {
            let query = { };   
            if(isNaN(pokemon))
                query = { name: pokemon }
            else
                query = { idPokemon: parseInt(pokemon)}     

            let response = await deletePokemon(query);
            if(!response)
                throw "Nenhum pokemon encontrado para o parâmetro: " +pokemon
            else
                return "Pokemon deletado com sucesso!"
        } catch (error) {
            throw error;            
        }
    }
}