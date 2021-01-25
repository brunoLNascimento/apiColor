const { findBy } = require("../repository/repository")

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
            return findBy(query, skip);
        } catch (error) {
            throw error;            
        }
    }
}