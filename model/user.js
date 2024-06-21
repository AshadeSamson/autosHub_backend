import mongoose from "mongoose";
import validator from "validator"
import CryptoJS from "crypto-js";
import { PASS } from "../config/config.js";

const { Schema } = mongoose;
const { isEmail } = validator

const userSchema = new Schema({

    username:{
        type: String,
        required: [true, "Please enter a username"],
        unique: true
    },
    email:{
        type: String,
        required: [true, "Please enter an email address"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter a valid email"]
    },
    password:{
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Password cannot be less than six (6) characters"],
    },
    isAdmin:{
        type: Boolean,
        default: false
    }

},{timestamps: true})



// static method for user login

userSchema.statics.login = async function(email, password){

    const user = await this.findOne({ email })

    if(user){
        const originalPassword = CryptoJS.AES.decrypt(user.password, PASS).toString(CryptoJS.enc.Utf8)
        const inputPassword = password

        if(originalPassword === inputPassword){
            return user
        }
        throw Error("incorrect password")
    }
    throw Error("incorrect email")
}


export default mongoose.model("users", userSchema)