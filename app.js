import express from "express";
import { PORT } from "./config/config.js";
import { connectToDatabase } from "./db/mongodb.js";

const app = express()
connectToDatabase()

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
