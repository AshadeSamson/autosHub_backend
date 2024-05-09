import userModel from "../model/user.js";
import  CryptoJS  from "crypto-js";
import { PASS, JWT } from "../config/config.js";
import { authError } from "../errorHandler/authError.js";
import jwt from "jsonwebtoken";


// signup controller
const signup = async (req, res) => {

    const newUser = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, PASS)  
    })

    try{
        const savedUser = await newUser.save()
        const { password, ...userdetails } = savedUser._doc
        
        const token = jwt.sign({ id: userdetails._id, email: userdetails.email, username: userdetails.username }, JWT, {expiresIn: "2d"})
        const tokenLS = 1000 * 3 * 24 * 60 * 60
        res.cookie("auth", token, {httpOnly: true, maxAge: tokenLS})
        res.status(201).json({ id: userdetails._id, email: userdetails.email, username: userdetails.username })

    } catch(e){
        const errors = authError(e)
        res.status(400).json({errors})
    }
}



// signin controller
const signin = async (req, res) => {

    const { email, password: inputPassword } = req.body

    try {
        const user = await userModel.login(email, inputPassword)
        const { password, ...userdetails } = user._doc

        const token = jwt.sign({ id: userdetails._id, email: userdetails.email, username: userdetails.username }, JWT, {expiresIn: "2d"})
        const tokenLS = 1000 * 3 * 24 * 60 * 60
        res.cookie("auth", token, {httpOnly: true, maxAge: tokenLS  })
        res.status(200).json({ id: userdetails._id, email: userdetails.email, username: userdetails.username })
        
        
    } catch (e) {
        const errors = authError(e)
        res.status(400).json({errors})
    }
}



export { signup, signin }