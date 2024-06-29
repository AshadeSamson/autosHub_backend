import express, { json } from "express";
import { PORT } from "./config/config.js";
import { connectToDatabase } from "./db/mongodb.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import carRouter from "./routes/car.js";
import orderRouter from "./routes/order.js";
import cartRouter from "./routes/cart.js";
import cookieParser from "cookie-parser";

const app = express()
connectToDatabase()

// Middlewares
app.use(express.json())
app.use(cookieParser())


// Routes
app.use("/ah/auth", authRouter)
app.use("/ah/user", userRouter)
app.use("/ah/product", carRouter)
app.use("/ah/order", orderRouter)
app.use("/ah/cart", cartRouter)


app.listen(PORT || 5000, () => {
    console.log(`Server running on port ${PORT}`)
})
