import express from "express";
import {
	getAllProducts,
	addProduct,
	updateProduct,
	deleteProduct,
} from "../controllers/productController.js";
import { verifyToken, verifyRole } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Rute untuk mendapatkan semua produk (hanya perlu autentikasi)
router.get("/", verifyToken, getAllProducts);

// Rute untuk menambah produk (hanya admin)
router.post("/", verifyToken, verifyRole(["admin"]), addProduct);

// Rute untuk update produk (hanya admin)
router.put("/:id", verifyToken, verifyRole(["admin"]), updateProduct);

// Rute untuk delete produk (hanya admin)
router.delete("/:id", verifyToken, verifyRole(["admin"]), deleteProduct);

export default router;
