import { Router } from "express";
import {
  inputWallet,
  visualWallet,
} from "../controllers/wallet.controllers.js";
import { userTokenValidate } from "../middlewares/userTokenValidate.js";
import { schemaValidate } from "../middlewares/schemaValidate.js";
import { walletSchema } from "../schemas/wallet.schema.js";

const walletRouter = Router();

walletRouter.get("/wallet", userTokenValidate, visualWallet);
walletRouter.post(
  "/wallet",
  userTokenValidate,
  schemaValidate(walletSchema),
  inputWallet
);

export default walletRouter;
