import express from "express";
import 'dotenv/config'
import usersController from './controllers/users'
import candidatesController from './controllers/candidates'
import adminController from './controllers/admin'
import votesController from './controllers/votes'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.use('/api/users', usersController)
app.use('/api/admin', adminController)
app.use('/api/candidates', candidatesController)
app.use('/api/votes', votesController)

app.listen(PORT, () =>{
    console.log(`Server started, Visit "http://localhost:${PORT}"`)
})