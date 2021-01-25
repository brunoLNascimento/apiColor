const { findcolor } = require("../service/color_service");

module.exports = {
    async findcolor(req, res){
        /**
         * #swagger.tags = ['findcolor'] 
         * #swagger.description = 'Endpoint para encontrar a cor do Pokemon e sem seguida salvar na base'
         * #swagger.parameters['name'] = { description: 'Nome do pokemon.' }
         * #swagger.parameters['id'] = { description: 'ID do pokemon.' }
         * #swagger.parameters['filtro'] = {description: 'A cor é criada de forma randomica de acordo com o type do pokemon, é salvo na base para buscas futuras'} 
        */
        try {
            let body = req.body;
            let response = await findcolor(body);
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error);
        }
    }
}


