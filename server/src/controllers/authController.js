import bcrypt from "bcryptjs";

import User from "../models/UserModel.js";
import createError from "../utils/createError.js";

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
      return next(createError(400, "Please fill in all fields"));

    const usernameExists = await User.findOne({ username });
    if (usernameExists) return next(createError(400, "Username already taken"));

    const userExists = await User.findOne({ email });
    if (userExists) return next(createError(400, "User already exists"));

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const { password: _, ...userInfo } = user._doc;

    res.status(201).json({
      message: "User has been registered successfully!",
      user: userInfo,
    });
  } catch (error) {
    next(error.message);
  }
};
