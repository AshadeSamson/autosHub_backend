import express from "express";
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middleware/verifyToken.js";
import { newOrder, getUserOrders } from "../controllers/orderController.js";


const orderRouter = express.Router()

orderRouter.post("/", verifyToken, newOrder)
orderRouter.get("/find/:id", verifyTokenAndAuthorization, getUserOrders)



export default orderRouter;