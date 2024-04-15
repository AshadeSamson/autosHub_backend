import express from "express";
import { signupPost } from "../controllers/authController.js"; 


const authRouter = express.Router()

authRouter.post("/signup", signupPost)

export default authRouter