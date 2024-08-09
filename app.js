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