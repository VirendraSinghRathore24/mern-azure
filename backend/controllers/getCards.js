const foodcarddb = require("../models/FoodCardDB");

exports.getCards = async (req,res) => {
    try{

        var id = Object.keys(req.query);
        blogTitle = req.query[id];

        if(blogTitle === undefined || !blogTitle)
        {
            const result = await foodcarddb.find({});
            res.json({data: result});
        }
        else{
            const result1 = await foodcarddb.findOne({"title":blogTitle});
           
    
            res.json({data: result1});
        }
       
    }
    catch(err){
        console.log(err);
    }
}