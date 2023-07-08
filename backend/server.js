const express = require("express");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3002;

const cors = require('cors');

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

app.use(express.json());

const fileUpload = require("express-fileupload");
app.use(fileUpload(
    {
        useTempFiles:true,
        tempFileDir: '/tmp/'
    }
));

const db = require("./config/database");
db.connect();

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

const Blog = require("./routes/Blog");
app.use("", Blog);



app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})