import { db } from "../database/db.js";
import bcrypt from "bcrypt";
import {v4 as uuid} from "uuid"
import dayjs from "dayjs";

export async function inputWallet(req, res, next) {
    const {value, description, type} = req.body
    const { token, userId } = res.locals
    try {
        const wallet = {value, description, type, date: dayjs().valueOf(), userId }
        await db.collection("wallet").insertOne(wallet)
        res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message);
    }

}

export async function visualWallet(req, res, next) {

    try {
        
    } catch (error) {
        res.status(500).send(error.message);
    }

}