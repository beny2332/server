import { Router } from "express"
import { login, register, profile } from "../routes/users"
import verifyUser from "../middlewares/verifyUser"

const router = Router()

router.post('/login', login)
router.post('/register', register)
router.post("/profile", verifyUser, profile)

export default router