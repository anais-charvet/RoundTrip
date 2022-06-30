import express from "express";
import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";
import jwt from "jsonwebtoken";
import AWS from "aws-sdk";

//
//pointing out a so called require in node_modules/nanoid/index.js
//downgraded to npm i nanoid@2.1.11, then up again to newer. TODO: check ESM vs. 
//CommonJS 
import { nanoid } from "nanoid";

// var { nanoid } = require("nanoid");
//const {nanoid} = require('nanoid');

const router = express.Router();

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    apiVersion: process.env.AWS_API_VERSION
};

const SES = new AWS.SES(awsConfig);


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
        return res.status(400).send("Error. Try again.")
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

export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        // console.log(email);
        const shortCode = nanoid(6).toUpperCase();
        const user = await User.findOneAndUpdate(
            { email }, 
            { passwordResetCode:  shortCode }
            );
            if(!user) return res.status(400).send ("User not found");

            //email
            const params = {
                Source: process.env.EMAIL_FROM,
                Destination: {
                    ToAddresses: [email]
                },
                Message: {
                    Body: {
                        Html: {
                            Charset: "UTF-8",
                            Data: `
                             <html>
                                <h1>Reset password</h1>
                                <p>Use this code to reset your password</p>
                                <h2 style="color:red;">${shortCode}</h2>
                                <i>RoundTrip.com</i>
                             </html>
                            `
                        }
                    },
                    Subject: {
                        Charset: "UTF-8",
                        Data: "Reset Password",
                    },
                },
            };


            const emailSent = SES.sendEmail(params).promise();
            emailSent.then((data) => {
                console.log(data);
                res.json({ ok: true })
            })
            .catch((err) => {
                console.log(err);
            })
    } catch(err){
        console.log(err)
    }
 }

export const sendTestEmail = async (req, res) => {
    // console.log("send email using SES");
    // res.json({ ok: true });
    const params = {
        Source: process.env.EMAIL_FROM,
        Destination: {
            ToAddresses: ["anais.charvet.1@gmail.com"]
        },
        ReplyToAddresses: [process.env.EMAIL_FROM],
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: `
                    <html>
                        <h1>Reset password link</h1>
                        <p>Please use the following link to reset your password</p>
                    </html>
                    `
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Password reset link"
            },
        },
    };

    const emailSent = SES.sendEmail(params).promise();

    emailSent.then((data) => {
        console.log(data)
        res.json({ ok: true });
    })
    .catch((err) => {
        console.log(err);
    });
};