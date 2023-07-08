const express = require("express");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3002;

const path = require('path');

const cors = require('cors');

// app.use(
//     cors({
//       origin: 'http://localhost:3000',
//       credentials: true,
//     })
//   );

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

app.use(express.static("./frontend/starter 3/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "starter 3", "build", "index.html"));
})

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})