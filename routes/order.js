import express from "express";
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middleware/verifyToken.js";
import { newOrder, getUserOrders, updateOrder, deleteOrder } from "../controllers/orderController.js";


const orderRouter = express.Router()

orderRouter.post("/", verifyToken, newOrder)
orderRouter.get("/find/:id", verifyTokenAndAuthorization, getUserOrders)
orderRouter.put("/:id", verifyTokenAndAdmin, updateOrder)
orderRouter.delete("/:id", verifyTokenAndAdmin, deleteOrder)



export default orderRouter;