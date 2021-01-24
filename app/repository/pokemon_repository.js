const { limit } = require("../config/config");
const mongoose = require('mongoose');
const Color = mongoose.model('Color');
mongoose.set('debug', true)

module.exports = {
    async findBy(query, skip){
        Color.find(query, function (err, response){
            if(err)
                return err;
            else
                return response; 
        }).limit(limit).skip(skip);
    }
}
