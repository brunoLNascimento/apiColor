const color = require('../controllers/color_controllers')

module.exports = function(server) {	
    server.post('/colorBy/', color.findcolor);
    server.get('/findPokemon/:pokemon', color.findPokemon);
    server.get('/findAllPokemon/:page', color.findAllPokemon);
}    