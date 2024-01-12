import { Router } from "express";

const walletRouter = Router()

walletRouter.get("/transaction")
walletRouter.post("/transaction")

export default walletRouter