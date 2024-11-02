import mongoose from "mongoose";

const { Schema } = mongoose

const cartSchema = new Schema({

    userID: { type: String, required: true },
    cars: [{ carID: {type: String}, quantity: {type: Number, default: 1}}]
    
}, {timestamps: true})

export default mongoose.model("cart", cartSchema)