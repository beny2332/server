import { Router } from "express"
import { getList, sid } from "../routes/candidates"

const router = Router()

router.post("/sid", sid)

router.get("/", getList)

export default router
