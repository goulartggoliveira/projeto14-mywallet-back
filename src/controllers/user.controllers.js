import { db } from "../database/db.js";
import bcrypt from "bcrypt";

export async function signUp(req, res, next) {
    const {name, email, password} = req.body

    try {
        const user = await db.collection("users").findOne({ email })
        if (user) return res.status(409).send({message: "User already exists"})

        const hash = bcrypt.hashSync(password, 10)

        await db.collection("users").insertOne({ name, email, password: hash })
        res.sendStatus(201)
        
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