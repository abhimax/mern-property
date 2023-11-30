import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import userRoute from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
configDotenv();

const connectDb = async () => {
  try {
    const respond = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to Mongo!");
  } catch (error) {
    console.log(error);
  }
};
connectDb();
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
