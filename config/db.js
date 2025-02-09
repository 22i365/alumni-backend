const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Use the MONGO_URI from the .env file
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);  // Exit the process if MongoDB connection fails
  }
};

module.exports = connectDB;
