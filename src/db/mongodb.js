import mongoose from "mongoose";
import { MONGODB_URL } from "../config/config.js";

export function connectToDatabase(){
    mongoose.connect(MONGODB_URL);

    mongoose.connection.on('connected', () => {
        console.log('db connected successfully');
    });

    mongoose.connection.on('error', (err) => {
        console.log('error occurred while trying to connect to db');
        console.log(err);
    });
}