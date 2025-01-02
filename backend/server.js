import express from "express";
import dotenv from "dotenv-flow";
import connectDB from "./config/db.js";
import router from "./routes/routes.js";

dotenv.config(); // Load environment variables

connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api", router);
