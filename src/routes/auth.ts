import pick from "lodash/pick";
import express from "express";
import bcrypt from "bcrypt";
import { User } from "models";

const router = express.Router();

router.post("/login", async (req, res) => {
	const user = await User.findOne({ username: req.body.username });
	if (!user) return res.status(400).send({ data: null, message: "Invalid username or password" });

	const isVerified = await bcrypt.compare(req.body.username, user.password);
	console.log("isVerified = ", isVerified);
	if (!isVerified)
		return res.status(400).send({ data: null, message: "Invalid username or password" });

	res.send({ data: pick(user, ["_id", "name", "username"]), message: null });
});

router.post("/register", async (req, res) => {
	const { name, username, password } = req.body;

	let user = await User.findOne({ username: username });
	if (user)
		return res.status(400).send({ data: null, message: `${username} username already exists` });

	user = new User({ name, username, password: await bcrypt.hash(password, 10) });

	await user.save(); // save to database
	res.send({ data: pick(user, ["_id", "name", "username"]), message: null });
});

export default router;
