import express from "express";
const router = express.Router();

export const register = (req, res) => {
    console.log(req.body);
    res.json("register user response controller")
}