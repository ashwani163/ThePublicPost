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

app.set("trust proxy", 1);

// CORS — handles OPTIONS automatically
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://the-public-post-vmmm.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

// ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
