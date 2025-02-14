const express = require("express");
const app = express();
const cors = require('cors')
require("./config")
const path = require("path");
app.use(express.json())
app.use(cors({
    origin: true,
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials: true
})
);

// Serve static files from the "uploads" directory
app.use("/uploads", express.static("uploads"));
app.use("/public", express.static("public"));
app.use("/public/images/banner", express.static("public/images/banner"));
app.use("/images", express.static(path.join(__dirname, "public/images/banner")));




const userRouter = require('./routes/userRoute');
const upload = require('./routes/upload')
const images = require('./routes/images')
app.use(userRouter)
app.use(upload)
app.use(images)
app.listen(3000, ()=>{console.log("Server up and running on port 3000!")});