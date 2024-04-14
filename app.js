import express, { json } from "express";
import { PORT } from "./config/config.js";
import { connectToDatabase } from "./db/mongodb.js";

const app = express()
connectToDatabase()

// Middlewares
app.use(express(json()))


// Routes
app.get("/ah", (req, res) => {
    res.send("You are welcome to autosHub!")
    
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
