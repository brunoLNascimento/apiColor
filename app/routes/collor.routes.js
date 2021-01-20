const color = require('../controllers/color_controllers')

module.exports = function(server) {	
    server.get('/colorBy/:pokemon', color.findcolor);
    server.get('/findPokemon/:pokemon', color.findPokemon);

}    