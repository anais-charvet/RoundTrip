import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from 'mongoose';
import csrf from "csurf";
import cookieParser from "cookie-parser";


const morgan = require("morgan");
require("dotenv").config();


const csrfProtection = csrf({ cookie: true })

//creation express app
const app = express();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    // useCreateIdex: true,
}).then(() => console.log("DB CONNECTED"))
.catch((err) => console.log("DB CONNECTION ERROR => ", err))

// apply middleware (code running before resp sent to client)
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// next = callback function needed by any middlewares not to stop at here console.log, otherwise send resp immediatly
// app.use((req, res, next) => {
//     console.log("this is the middleware");
//     next();
// });

//route, think express as a (req, res) handler
// app.get("/", (req, res) => {
//     res.send("you hit server endpoint");
// })

//route
readdirSync("./routes").map((r) => 
    app.use("/api", require(`./routes/${r}`))
);

//csrf
app.use(csrfProtection);


//endpoint
app.get("/api/csrf-token", (req, res) => {
    res.json( { csrfToken: req.csrfToken() } );
});

//port, with process as top level object of node where entire process runs.
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
