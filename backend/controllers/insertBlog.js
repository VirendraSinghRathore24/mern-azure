const foodblogdb = require("../models/FoodBlogDB");

exports.insertBlog = async (req,res) => {
    try{
        const {sidebartitle, blogtitle, description} = req.body;

        await foodblogdb.create({"sidebartitle":sidebartitle, "blogtitle":blogtitle, "description":description});

        res.json({
            success:true,
            message:"Food Blog uploaded successfully"
        })
    }
    catch(err){
        console.log(err);
    }
}