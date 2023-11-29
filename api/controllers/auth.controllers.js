import User from "../modals/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
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
    res.status(500).json(error.message);
  }
};
