import express from "express";
const router = express.Router();
import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth"

export const register = async (req, res) => {
    // console.log(req.body);
    // res.json("register user response controller")
    try {
        // console.log(req.body);
        const {name, email, password} = req.body
        // validation
        if (!name) return res.satus(400).send ("Name is required.")
        if(!password || password.length < 6){
            return res.
            status(400)
            .send("Password is required and should be minimum 6 characters long.");
        }
        let userExist = await User.findOne({email}).exec();
        if(userExist) return res.status(400).send ("Email is already used.")
        //Create user. Hash paswword
        const hashedPaswword = await hashPassword(password)

        //Register
        const user = new User({
            name, 
            email, 
            password: hashedPaswword,
        });
        await user.save();
        // console.log('saved user', user);
        return res.json({ok: true});
    } catch(err) {
        console.log(err)
        return res.status(400).send("Error. Try Again")
    }
}