import express from "express";
import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";
import jwt from "jsonwebtoken";


const router = express.Router();

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
        /*console.log(err)*/
        return res.status(400).send("Error. Try again.")
    }
};

export const login = async (req, res) => {
    try {
        //in server term
        //console.log(req.body)
        const {email, password} = req.body;
        //find user from email in db
        const user = await User.findOne({ email }).exec();
        if(!user) return res.status(400).send("No user found");
        // check password (plain version and hashed one from user received)
        const match = await comparePassword(password, user.password)
        // create signed jwt
        // (use id  as payload, data to be embeded in the sign token)
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d",
        });
        //we can send json resp to client. Return user and token to client, exclude hashed password
        user.password = undefined;
        // send token in cookie with http only flag 
        res.cookie("token", token, {
            httpOnly: true,
            //only https, for prod:
            //secure:true, 
        });
        //send user as json resp
        res.json(user)
    } catch(err) {
        /*console.log(err)*/
        return res.status(400).send("Error. Try againnnnnn.")
    }
};

export const logout = async (req, res) => {
    try{
        res.clearCookie("token");
        return res.JSON({ message: "Sign out successfull" })
    } catch(err) {
        /*console.log(err)*/
    }
};

//get id, query db and get the user; and send to front 
export const currentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password').exec();
        // console.log('CURRENT_USER', user)
        return res.JSON({ ok: true });
    } catch(err){
        //console.log(err);
    }
};


export const sendTestEmail = async (req, res) => {
    console.log("send email using SES");
    res.json({ ok: true });
};