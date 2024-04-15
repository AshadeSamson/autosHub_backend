import mongoose from "mongoose";
import validator from "validator"

const { Schema } = mongoose;
const { isEmail } = validator

const userSchema = new Schema({

    userName:{
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
    }

},{timestamps: true})


export default mongoose.model("clients", userSchema)