import Product from "../models/Product.js";

// Fungsi untuk mendapatkan semua produk
const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

// Fungsi untuk menambah produk
const addProduct = async (req, res) => {
	const { name, price, image, stock } = req.body;
	try {
		const newProduct = new Product({ name, price, image, stock });
		await newProduct.save();
		res.status(201).json({ message: "Product added" });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

// Fungsi untuk update produk
const updateProduct = async (req, res) => {
	const { id } = req.params; // Mengambil id produk dari parameter
	const { name, price, image, stock } = req.body;

	try {
		// Cari produk berdasarkan ID
		const product = await Product.findById(id);
		if (!product) return res.status(404).json({ message: "Product not found" });

		// Update produk
		product.name = name || product.name;
		product.price = price || product.price;
		product.image = image || product.image;
		product.stock = stock || product.stock;

		await product.save(); // Simpan perubahan
		res.json({ message: "Product updated", product });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

// Fungsi untuk menghapus produk
const deleteProduct = async (req, res) => {
	const { id } = req.params; // Mengambil id produk dari parameter

	try {
		// Cari dan hapus produk berdasarkan ID
		const product = await Product.findByIdAndDelete(id);
		if (!product) return res.status(404).json({ message: "Product not found" });

		res.json({ message: "Product deleted", product });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

export { getAllProducts, addProduct, updateProduct, deleteProduct };
