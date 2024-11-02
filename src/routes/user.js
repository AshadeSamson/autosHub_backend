import express from "express";
import { deactivate, update } from "../controllers/userController.js";
import { verifyToken, verifyTokenAndAuthorization } from "../middleware/verifyToken.js";


const userRouter = express.Router()

userRouter.put("/:id", verifyTokenAndAuthorization, update)
userRouter.delete("/:id", verifyTokenAndAuthorization, deactivate)

export default userRouter;