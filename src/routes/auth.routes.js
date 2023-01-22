import { Router } from "express"
import { singUp, singIn} from "../controllers/auth.controllers.js"

const router = Router()

router.post("/sign-up", singUp)
router.post("/sign-in", signIn)

export default router