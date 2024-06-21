import mongoose from "mongoose";

const { Schema } = mongoose

const orderSchema = new Schema({

    userID: { type: String, required: true },
    cars: [{ carID: {type: String}, quantity: {type: Number, default: 1}}],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
    
}, {timestamps: true})

export default mongoose.model("orders", orderSchema)