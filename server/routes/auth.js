import express from "express";

const router = express.Router();

//route, think express as a (req, res) handler
router.get("/register", (req, res) => {
    res.send("register user");
});

module.exports = router;