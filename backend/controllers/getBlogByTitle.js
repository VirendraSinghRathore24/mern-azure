const foodblogdb = require("../models/FoodBlogDB");

exports.getBlogByTitle = async (req,res) => {
    try{

        var id = Object.keys(req.query);
        sidebartitle = req.query[id];

        if(sidebartitle === undefined || !sidebartitle)
        {
            const result = await foodblogdb.find({});
            res.json({data: result});
        }
        else{
            const result1 = await foodblogdb.findOne({"sidebartitle":sidebartitle});
            res.json({data: result1});
        }
    }
    catch(err){
        console.log(err);
    }
}