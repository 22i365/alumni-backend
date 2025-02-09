// require("dotenv").config();  // Load environment variables

// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// connectDB();

// // Alumni Routes
// const alumniRoutes = require("./routes/alumniRoutes");  // Import routes
// app.get("/api/alumni", alumniRoutes);  // Use routes correctly

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




require("dotenv").config();  // Load environment variables

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Alumni Routes
const alumniRoutes = require("./routes/alumniRoutes");  // Import routes
app.use("/api/alumni", alumniRoutes);  // Correct usage of routes

const PORT = process.env.PORT || 3000;
app.listen(PORT,'0.0.0.0', () => console.log(`Server running on port ${PORT}`));
