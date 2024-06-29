import express from "express";
import { verifyToken, verifyTokenAndAuthorization } from "../middleware/verifyToken";
import { createCart, updateCart, deleteCart, getUserCart } from "../controllers/cartController";

const cartRouter = express.Router()

cartRouter.post("/", verifyToken, createCart)
cartRouter.get("/", verifyTokenAndAuthorization, getUserCart)
cartRouter.put("/:id", verifyTokenAndAuthorization, updateCart)
cartRouter.delete("/:id", verifyTokenAndAuthorization, deleteCart)

export default cartRouter