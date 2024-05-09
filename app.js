import express, { json } from "express";
import { PORT } from "./config/config.js";
import { connectToDatabase } from "./db/mongodb.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";

const app = express()
connectToDatabase()

// Middlewares
app.use(express.json())
app.use(cookieParser())


// Routes
app.use("/ah/auth", authRouter)
app.use("/ah/user", userRouter)


app.listen(PORT || 5000, () => {
    console.log(`Server running on port ${PORT}`)
})
