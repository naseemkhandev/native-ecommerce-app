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
