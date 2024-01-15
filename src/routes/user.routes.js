import { signIn, signOut, signUp } from "../controllers/user.controllers.js";
import { schemaValidate } from "../middlewares/schemaValidate.js";
import { userTokenValidate } from "../middlewares/userTokenValidate.js";
import { loginSchema, userSchema } from "../schemas/user.schema.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/sign-up", schemaValidate(userSchema), signUp);
userRouter.post("/sign-in", schemaValidate(loginSchema), signIn);
userRouter.post("/sign-out", userTokenValidate, signOut);

export default userRouter;
