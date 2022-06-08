import express from "express";
// controllers
import { register, login, logout } from "../controllers/auth";

const router = express.Router();



//route, think express as a (req, res) handler
// router.get("/register", (req, res) => {
//     res.send("register user");
// }));

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout)

module.exports = router;