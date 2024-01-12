import { db } from "../database/db.js";
import { userSchema } from "../schemas/user.schema.js";

export async function signUp(req, res, next) {
    const {name, email, password} = req.body

    try {
        res.send("sign-up")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function signIn(req, res, next) {
    try {
        res.send("sign-in")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function signOut(req, res, next) {
    try {
        res.send("sign-out")
    } catch (error) {
        res.status(500).send(error.message)
    }
}