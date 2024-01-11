import cors from "cors";
import express from "express";
// import { MongoClient } from "mongodb"
// import dotenv from "dotenv"

const app = express();
app.use(cors());
app.use(express.json());

// dotenv.config()

// const mongoClient = new MongoClient(process.env.DATABASE_URL)
// try {
//     await mongoClient.connect()
//     console.log("MongoDB conectado!")
// } catch (err) {
//     console.log(err.message)
// }

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))

