import express from "express"
import cors from "cors"
import { getFlowers, addNewFlower } from "./src/flowers.js" // Importing the function
const PORT = 3000 // Defines the port 

const app = express() // Creates express app
app.use(cors()) // Opens it up to the whole world. Allows everyone in
app.use(express.json()) // When we get a body, expect it to be in JSON format

app.get("/flowers", getFlowers) // Only request we are allowing in.
app.post("/flowers", addNewFlower)

app.listen(PORT, () => { 
    console.log(`listening on http://localhost:${PORT}...`)
})
