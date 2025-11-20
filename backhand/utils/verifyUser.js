import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  // Debug log for Render Logs
  console.log("Cookies received:", req.cookies); 
  
  if (!token) {
    return next(errorHandler(401, "Unauthorized - No Token Found"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized - Invalid Token"));
    }
    req.user = user;
    next();
  });
};