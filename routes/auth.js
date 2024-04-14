import express from "express";
import userModel from "../model/user.js";
import  CryptoJS  from "crypto-js";
import { PASS } from "../config/config.js";

const authRouter = express.Router()

authRouter.post("/signup", async (req, res) => {

    const newUser = new userModel({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        userName: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, PASS)  
    })

    const savedUser = await newUser.save()
    res.json(savedUser)
    
})

export default authRouter