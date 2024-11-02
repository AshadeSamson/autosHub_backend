import express from "express";
import { verifyToken, verifyTokenAndAuthorization } from "../middleware/verifyToken.js";
import { createCart, updateCart, deleteCart, getUserCart } from "../controllers/cartController.js";

const cartRouter = express.Router()

cartRouter.post("/", verifyToken, createCart)
cartRouter.get("/find/:userID", verifyTokenAndAuthorization, getUserCart)
cartRouter.put("/:id", verifyTokenAndAuthorization, updateCart)
cartRouter.delete("/:id", verifyTokenAndAuthorization, deleteCart)

export default cartRouter