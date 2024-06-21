import express from "express";
import { addNewCar } from "../controllers/carController.js";
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middleware/verifyToken.js";


const carRouter = express.Router()

// ADD A NEW PRODUCT
carRouter.post("/", verifyTokenAndAdmin, addNewCar)

export default carRouter;