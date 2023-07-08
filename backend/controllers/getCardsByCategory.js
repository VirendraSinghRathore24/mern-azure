const foodcategorydb = require("../models/FoodCategoryDB");

exports.getCardsByCategory = async (req,res) => {
    try{

        var id = Object.keys(req.query);
        category = req.query[id];

        if(category === undefined || !category || category === "All-Food-Reciepies")
        {
            const result = await foodcategorydb.find({});
            res.json({data: result});
        }
        else{
            const result1 = await foodcategorydb.find({"category":category});
            res.json({data: result1});
        }
    }
    catch(err){
        console.log(err);
    }
}