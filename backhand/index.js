// index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authroutes.js";
import userRoutes from "./routes/userroute.js";
import postRoutes from "./routes/postroute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const app = express();

// 1. TRUST PROXY (Required for Render to handle secure cookies)
app.set("trust proxy", 1);

// 2. CORS MIDDLEWARE (Must be at the top)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://the-public-post-vmmm.vercel.app", // Your Vercel URL
    ],
    credentials: true, // Allows cookies to be sent
    methods: ["GET", "POST", "PUT", "DELETE"], // Explicitly allow methods
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 3. PARSERS
app.use(express.json());
app.use(cookieParser());

// 4. ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

// ERROR HANDLER
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});