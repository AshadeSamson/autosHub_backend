import userModel from "../model/user.js";
import CryptoJS from "crypto-js";
import { PASS } from "../config/config.js";


export const update = async (req, res) => {

        // hash user password before update
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, PASS).toString()
    }

    try {
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true})
        const { password, ...userdetails} = updatedUser._doc
        res.status(200).json({id: userdetails._id, email: userdetails.email, username: userdetails.username})
        
    } catch (error) {

        res.status(500).json(error.message)
        console.log(error)
        
    }

}



export const deactivate = async (req, res) => {

    try {
        res.status(200).json("you are about to DELETE your account")
        
    } catch (error) {

        res.status(400).json(error.message)
        
    }

}