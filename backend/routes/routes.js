import express from "express";

// this file contains general routes
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello, welcome!");
});

export default router;
