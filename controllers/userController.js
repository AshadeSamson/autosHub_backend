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
    }
}



export const deactivate = async (req, res) => {

    try {
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Your account has been deleted")
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}