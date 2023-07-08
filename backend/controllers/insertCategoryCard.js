const foodcategorydb = require("../models/FoodCategoryDB");
const cloudinary = require("cloudinary").v2;

async function uploadFileToCloudinary(file, folder, req){
    const options = {
        folder,
        public_id: req.files.file.name,
        resource_type: 'image'
    };

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.insertCategoryCard = async (req,res) => {
    try{
        const {category, title, shortDesc} = req.body;
        const file = req.files.file;

        const response = await uploadFileToCloudinary(file, "Viren", req);
        const imageUrl = response.secure_url;

        console.log(imageUrl);

        const result = await foodcategorydb.create({"category":category.replaceAll(" ", "-"), "title":title, "shortDesc":shortDesc, "imageUrl":imageUrl});

        res.json({
            success:true,
            message:"Food Card uploaded successfully"
        })
    }
    catch(err){
        console.log(err);
    }
}