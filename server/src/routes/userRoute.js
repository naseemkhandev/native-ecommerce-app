import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  updateUserProfileImage,
} from "../controllers/userController.js";
import verifyToken from "../middlewares/verifyToken.js";
import uploadFile from "../middlewares/uploadFile.js";
const router = express.Router();

router.get("/profile", verifyToken, getUserProfile);
router.put("/profile/update", verifyToken, updateUserProfile);
router.put(
  "/profile/update/profile-image",
  verifyToken,
  uploadFile,
  updateUserProfileImage
);

export default router;
