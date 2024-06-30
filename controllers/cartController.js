import cartModel from "../model/cart.js";


// CREATE NEW CART
export const createCart = async(req, res) => {
    const cart = await new cartModel(req.body)
    try {
        const userCart = await cart.save()
        res.status(201).json(userCart)
    } catch (error) {
        res.status(501).json(error.message)
    }
}


// GET USER CART
export const getUserCart = async (req, res) => {
    try {
        const userCart = await cartModel.findOne({ userID: req.params.userID})
        res.status(200).json(userCart)
    } catch (error) {
        res.status(501).json(error.message)
    }
}


// UPDATE CART
export const updateCart = async (req, res) => {
    try {
        const updatedCart = await cartModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true})
        res.status(201).json(updatedCart);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// DELETE CART
export const deleteCart = async (req, res) => {
    try {
        await cartModel.findByIdAndDelete(req.params.id)
        res.status(201).json("Customer cart has been deleted...");
    } catch (error) {
        res.status(500).json(error.message)
    }
}