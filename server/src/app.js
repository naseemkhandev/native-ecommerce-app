import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";

import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import handleError from "./middlewares/handleError.js";
import { config } from "./config/config.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Cloudinary Configuration
cloudinary.config({
  cloud_name: config.cloudinaryName,
  api_key: config.cloudinaryApiKey,
  api_secret: config.cloudinaryApiSecret,
});

app.get("/", (req, res) => {
  res.send("<h1>Server is Running...</h1>");
});

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);

// Error Handler
app.use(handleError);

export default app;
