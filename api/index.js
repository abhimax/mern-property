import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
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
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
