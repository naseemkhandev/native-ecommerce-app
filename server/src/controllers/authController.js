import bcrypt from "bcryptjs";

import User from "../models/UserModel.js";
import createError from "../utils/createError.js";
import generateToken from "../utils/generateToken.js";

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

    const token = generateToken(user._id, user.isAdmin, res);
    const { password: _, ...userInfo } = user._doc;

    res.status(201).json({
      message: "User has been registered successfully!",
      user: userInfo,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return next(createError(400, "Please fill in all fields"));

    const userExists = await User.findOne({ email });
    if (!userExists) return next(createError(400, "Wrong Credentials"));

    const decodedPassword = await bcrypt.compare(password, userExists.password);
    if (!decodedPassword) return next(createError(400, "Wrong Credentials"));

    const token = generateToken(userExists._id, userExists.isAdmin, res);
    const { password: _, ...userInfo } = userExists._doc;

    res.status(200).json({
      message: "User has been logged in successfully!",
      user: userInfo,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const logoutUser = async (req, res, next) => {
  try {
    res
      .clearCookie("token", {
        maxAge: 0,
      })
      .status(200)
      .json({ message: "Logged Out Successfully" });
  } catch (error) {
    next(error);
  }
};
