import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/jwtConfig.js";

const verifyToken = (req, res, next) => {
	const token = req.header("Authorization")?.replace("Bearer ", "");
	if (!token)
		return res.status(401).json({ message: "No token, authorization denied" });

	try {
		const decoded = jwt.verify(token, jwtConfig.secret);
		req.user = decoded;
		next();
	} catch (error) {
		return res.status(401).json({ message: "Token is not valid" });
	}
};

const verifyRole = (roles) => (req, res, next) => {
	if (!roles.includes(req.user.role)) {
		return res.status(403).json({ message: "Permission denied" });
	}
	next();
};

export { verifyToken, verifyRole };
