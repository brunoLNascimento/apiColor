const { findcolor } = require("../service/color_service");

module.exports = {
    async findcolor(req, res){
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


