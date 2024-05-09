import userModel from "../model/user.js";


export const update = async (req, res) => {

    try {
        res.status(200).json("you are about to update your account")
        
    } catch (error) {

        res.status(400).json(error.message)
        
    }

}



export const deactivate = async (req, res) => {

    try {
        res.status(200).json("you are about to DELETE your account")
        
    } catch (error) {

        res.status(400).json(error.message)
        
    }

}