import express from "express";
import { addNewCar, updateCar, removeCar } from "../controllers/carController.js";
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middleware/verifyToken.js";


const carRouter = express.Router()







            // ADMIN ROUTES

// ADD A NEW CAR TO THE COLLECTION
carRouter.post("/new", verifyTokenAndAdmin, addNewCar)

// UPDATE A CAR IN THE COLLECTION
carRouter.put("/:id", verifyTokenAndAdmin, updateCar)

// DELETE A CAR FROM THE COLLECTION
carRouter.delete("/:id", verifyTokenAndAdmin, removeCar)

export default carRouter;