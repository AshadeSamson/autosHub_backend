import mongoose from "mongoose";

const { Schema } = mongoose

const carSchema = new Schema({

    brand: { type: String, required: true},
    model: { type: String, required: true},
    year: { type: Number, required: true},
    color: { type: String, required: true},
    image: { type: String, required: true},
    price: { type: Number, required: true}
    
}, {timestamps: true})

export default mongoose.model("cars", carSchema)