import express from "express";
import cores from "cors";
const morgan = require("morgan");
require("dotenv").config();

// console.log("server setup")


//creation express app
const app = express();

// apply middleware (code running before resp sent to client)
app.use(cors());
app.use(express.json());