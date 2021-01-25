const randomColor = require("randomcolor");

module.exports = {
    getColor(name){
        switch (name){
            case "water":
            case "flying":
            case "ice":
            case "ghost":
            case "dragon":
                return randomColor({ count:1, hue: "blue"});
            case "grass":
            case "bug":
                return randomColor({ count:1, hue: "green"});
            case "fire":
            case "fighting":
                return randomColor({ count:1, hue: "red"});
            case "eletric":
            case "ground":
                return randomColor({ count:1, hue: "yellow"});
            case "poison":
                return randomColor({ count:1, hue: "purple"});
            case "phychic":
            case "fairy":
                return randomColor({ count:1, hue: "pink"});
            case "rock":
            case "steel":
                return randomColor({ count:1, hue: "gray"});
            case "dark":
                return randomColor({ count:1, hue: "brown"});
            default:
                return randomColor({ count:1, hue: ""});        
            }
    }
}