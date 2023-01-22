import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const mongoClient = new MongoClient(process.env.MONGO_URI)

try {
    await mongoClient.connect()
    console.log("Connected")
} catch (error) {
    console.log(error);
}
const db = mongoClient.db("carteirinha")


export const usersCollection = db.collection("users")
export const sessionsCollection = db.collection("sessions")
export const transactionsCollection = db.collection("transactions")