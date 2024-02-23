import pick from "lodash/pick";
import express from "express";
import bcrypt from "bcrypt";
import { Auth } from "../models/auth/auth";

const router = express.Router();

router.post("/login", async (req, res) => {
	const user = await Auth.findOne({ username: req.body.username });
	if (!user) return res.status(400).send({ data: null, message: "Invalid username or password" });

	const isVerified = await bcrypt.compare(req.body.password, user.password); // req.body.username o'rniga req.body.password
	console.log("isVerified = ", isVerified);
	if (!isVerified)
		return res.status(400).send({ data: null, message: "Invalid username or password" });

	res.send({ data: user, message: null });
});

router.post("/register", async (req, res) => {
	const { name, username, password } = req.body;

	let user = await Auth.findOne({ username: username });
	if (user)
		return res.status(400).send({ data: null, message: `${username} username already exists` });

	user = new Auth({ name, username, password: await bcrypt.hash(password, 10) });

	await user.save(); // save to database
	res.send({ data: pick(user, ["_id", "name", "username"]), message: null });
});

export default router;
