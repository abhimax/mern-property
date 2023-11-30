import User from "../modals/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log("MONGO_HASH_KEY:", +process.env.MONGO_HASH_KEY);
  const hashPassword = await bcryptjs.hashSync(
    password,
    +process.env.MONGO_HASH_KEY
  );
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
    //next(errorHandler(550, "custom error!"));
  }
};
