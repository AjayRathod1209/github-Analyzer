import "dotenv/config";

import express from "express";
import cors from "cors";

import githubRoutes from "./routes/githubRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running 🚀",
  });
});

// GitHub routes
app.use("/api/github", githubRoutes);

// Auth routes
app.use("/api/auth", authRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
