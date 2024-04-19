import userModel from "../model/user.js";
import  CryptoJS  from "crypto-js";
import { PASS, JWT } from "../config/config.js";
import { authError } from "../errorHandler/authError.js";
import jwt from "jsonwebtoken";


// signup controller
const signup = async (req, res) => {

    const newUser = new userModel({
        userName: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, PASS)  
    })

    try{
        const savedUser = await newUser.save()
        const { password, ...userdetails } = savedUser
        const details = userdetails._doc
        
        const token = jwt.sign({ details }, JWT, {expiresIn: "2d"})
        const tokenLS = 1000 * 3 * 24 * 60 * 60
        res.cookie("auth", token, {httpOnly: true, maxAge: tokenLS, secured: true })
        res.status(201).json(details)
    } catch(e){
        const errors = authError(e)
        res.status(400).json({errors})
    }
}



// signin controller
const signin = async (req, res) => {

    const { email, password } = req.body
    const user = await userModel.findOne({email: email})

        console.log("login route working")

}

export { signup, signin }