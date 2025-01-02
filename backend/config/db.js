import mongoose from "mongoose";

const connectDB = async () => {
	try {
		// Menggabungkan variabel-variabel untuk membuat MONGO_URI
		const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}${process.env.MONGO_OPTIONS}`;
		const conn = await mongoose.connect(MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
