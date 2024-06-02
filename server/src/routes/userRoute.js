import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import verifyToken from "../middlewares/verifyToken.js";
const router = express.Router();

router.get("/profile", verifyToken, getUserProfile);
router.put("/profile/update", verifyToken, updateUserProfile);

export default router;
