const mongoose = require("mongoose");

const foodCardSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    shortDesc:{
        type:String
    },
    imageUrl:{
        type:String
    }
})

const foodcarddb = mongoose.model("foodcarddb", foodCardSchema);
module.exports = foodcarddb;