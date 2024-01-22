import { db } from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function signUp(req, res, next) {
  const { name, email, password } = req.body;

  try {
    const user = await db.collection("users").findOne({ email });
    if (user) return res.status(409).send("User already exists");

    const hash = bcrypt.hashSync(password, 10);

    await db.collection("users").insertOne({ name, email, password: hash });
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function signIn(req, res, next) {
  const { email, password } = req.body;
  try {
    const user = await db.collection("users").findOne({ email });
    if (!user) return res.status(404).send("email not found");

    const passwordExists = bcrypt.compareSync(password, user.password);
    if (!passwordExists)
      return res.status(401).send("incorrect password");

    const token = uuid();
    await db.collection("sessions").insertOne({ token, userId: user._id });

    res.send({ token, profileName: user.name });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function signOut(req, res, next) {
  const { token } = res.locals;
  try {
    await db.collection("sessions").deleteOne({ token });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
