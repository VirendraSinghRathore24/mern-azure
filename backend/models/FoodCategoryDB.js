const mongoose = require("mongoose");

const foodCategorySchema = new mongoose.Schema({
    category:{
        type: String,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    shortDesc:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }
})

const foodcategorydb = mongoose.model("foodcategorydb", foodCategorySchema);
module.exports = foodcategorydb;