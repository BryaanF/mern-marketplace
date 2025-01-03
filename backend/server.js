import express from "express";
import dotenv from "dotenv-flow";
import connectDB from "./config/db.js";
import router from "./routes/routes.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config(); // Load environment variables

connectDB();

const app = express();
app.use(express.json());

// use auth routes
app.use("/api/auth", authRoutes);
// Use product routes
app.use("/api/products", productRoutes);
// Use general routes
app.use("/api", router);

app.get("/", (req, res) => {
	res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
