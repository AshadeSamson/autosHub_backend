import userModel from "../model/user.js";
import  CryptoJS  from "crypto-js";
import { PASS } from "../config/config.js";
import { authError } from "../error/authError.js";


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
        res.status(201).json(details)
    } catch(e){
        const errors = authError(e)
        res.status(400).json({errors})
    }
}



// signin controller
const signin = async (req, res) => {

        console.log("login route working")

}

export { signup, signin }