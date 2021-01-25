const color = require('../controllers/color_controllers')
const pokemon = require('../controllers/pokemon_controller')

module.exports = function(server) {	
    server.post('/colorBy/', color.findcolor);
    server.get('/findPokemon/:pokemon', pokemon.findPokemon);
    server.get('/findAllPokemon/:page?', pokemon.findAllPokemon);
    server.delete('/deletePokemon/:pokemon', pokemon.delete);
}    