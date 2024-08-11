const express = require("express");
const app = express()
const PORT = 1000;

// CORS
const cors = require("cors");
app.use(cors())

// BODY PARSER
const bodyParser = require("body-parser")
app.use(bodyParser.json())

// DOTENV
const dotenv = require("dotenv");
dotenv.config();

// ROUTES 
const authRoute = require("./routes/auth/auth");
app.use("/auth", authRoute)
const hallRoute = require("./routes/hall/hall");
app.use("/hall", hallRoute)
const moviesRoute = require("./routes/movie/movie");
app.use("/movie", moviesRoute)

// DATABASE
const mongoose = require("mongoose");
let mongoUrl = `mongodb+srv://helloitsbinod:godbewithus@cluster0.dqiqluu.mongodb.net/`

// DATABASE CONNECTION
try {
    mongoose.connect(mongoUrl)
    console.log("Database Connected Successfully")
} catch (error) {
    console.log(error)
}

// APPLICATION LISTEN 
app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server is successfully Running, on port ${PORT}`);
    } else {
        console.log("Error Occured, can't start", err);
    }
})