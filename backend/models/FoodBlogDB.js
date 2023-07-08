const mongoose = require("mongoose");

const foodBlogSchema = new mongoose.Schema({
    sidebartitle:{
        type: String,
        required:true
    },
    blogtitle:{
        type: String,
        required:true
    },
    description:{
        type:String
    }
})

const foodblogdb = mongoose.model("foodblogdb", foodBlogSchema);
module.exports = foodblogdb;