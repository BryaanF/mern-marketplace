import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { jwtConfig } from "../config/jwtConfig.js";

const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) return res.status(400).json({ message: "Invalid credentials" });

		const isMatch = await user.comparePassword(password);
		if (!isMatch)
			return res.status(400).json({ message: "Invalid credentials" });

		const token = jwt.sign(
			{ userId: user._id, role: user.role },
			jwtConfig.secret,
			{ expiresIn: jwtConfig.expiresIn }
		);
		res.json({ token });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

const register = async (req, res) => {
	const { username, email, password, role } = req.body;
	try {
		const newUser = new User({ username, email, password, role });
		await newUser.save();
		res.status(201).json({ message: "User created" });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

export { login, register };
