import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";

import User from "../models/UserModel.js";
import getDataUri from "../utils/getDataUri.js";

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

export const updateUserProfileImage = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);
    const file = getDataUri(req.file).content;

    if (user.profileImage.public_id) {
      await cloudinary.uploader.destroy(user.profileImage.public_id);
    }

    const uploadedImage = await cloudinary.uploader.upload(file);
    user.profileImage = {
      public_id: uploadedImage.public_id,
      url: uploadedImage.secure_url,
    };

    const updatedUser = await user.save();

    res.status(200).json({
      message: "User profile image updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};
