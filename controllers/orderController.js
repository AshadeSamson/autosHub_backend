import orderModel from "../model/order.js";


// CREATE A NEW ORDER
export const newOrder = async (req, res) => {
    const order = await new orderModel(req.body)
    try {
        const newOrder = await order.save()
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(501).json(error.message)
    }
}


// GET USER ORDERS
export const getUserOrders = async (req, res) => {
    try {
        const userOrders = await orderModel.find({ userID: req.params.id})
        res.status(200).json(userOrders)
    } catch (error) {
        res.status(501).json(error.message)
    }
}


// UPDATE ORDER
export const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await orderModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true})
        res.status(201).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error.message)
    }
}


// DELETE ORDER
export const deleteOrder = async (req, res) => {
    try {
        await orderModel.findByIdAndDelete(req.params.id)
        res.status(201).json("Order has been deleted...");
    } catch (error) {
        res.status(500).json(error.message)
    }
}