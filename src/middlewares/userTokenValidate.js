import { db } from "../database/db.js"

export async function userTokenValidate (req, res, next) {
    const {authorization} = req.headers
    const token = authorization?.replace("Bearer ", "")

    if (!token) return res.status(404).send({message: "token not found"})

    try {
        const session = await db.collection("sessions").findOne({ token })
        if (!session) return res.status(404).send({message: "invalid token"})
        
        res.locals.token = token
        res.locals.userId = session.userId

        next()

    } catch (error) {
        res.status(500).send(error.message)
    }

}