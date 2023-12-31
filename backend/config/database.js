const mongoose = require("mongoose");

require("dotenv").config();

exports.connect =() =>{
    mongoose.connect(process.env.CUSTOMCONNSTR_MyConnectionString || process.env.MONGODB_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("DB connection successful"))
    .catch((err) => {
        console.log("DB connection " + err);
        process.exit(1);
    });
}