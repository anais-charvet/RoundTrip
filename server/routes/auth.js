import express from "express";


const router = express.Router();

// controllers
import {register} from "../controllers/auth";

//route, think express as a (req, res) handler
// router.get("/register", (req, res) => {
//     res.send("register user");
// }));

router.post("/register", register);

module.exports = router;