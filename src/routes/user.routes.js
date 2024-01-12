import { Router } from "express";

const userRouter = Router()

userRouter.post("/sign-up", (req, res) => res.send("funcionou"))
userRouter.post("sign-in")
userRouter.post("/sign-out")

export default userRouter