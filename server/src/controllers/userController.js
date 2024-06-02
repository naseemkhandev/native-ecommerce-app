import bcrypt from "bcryptjs";

import User from "../models/UserModel.js";

export const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");

    res
      .status(200)
      .json({ message: "User profile fetched successfully!", user });
  } catch (error) {
    next(error);
  }
};

export const updateUserProfile = async (req, res, next) => {
  try {
    let user = req.body;

    if (user.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.userId,
      {
        $set: user,
      },
      { new: true }
    ).select("-password");

    res.status(200).json({
      message: "User profile updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};
