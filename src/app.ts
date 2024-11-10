import express from "express";
import 'dotenv/config'

const PORT = process.env.PORT || 3000
const app = express()


app.listen(PORT, () =>{
    console.log(`Server started, Visit "http://localhost:${PORT}"`)
})