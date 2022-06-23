import express from "express";
// controllers
import { register, login, logout, currentUser, sendTestEmail } from "../controllers/auth";
//middleware
import { requireSignin } from "../middlewares";

const router = express.Router();



//route, think express as a (req, res) handler
// router.get("/register", (req, res) => {
//     res.send("register user");
// }));

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user", requireSignin, currentUser);
router.get("/send-email", sendTestEmail);

module.exports = router;