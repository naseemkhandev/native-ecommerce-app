import express from "express";
import {
  getAllProducts,
  getSingleProduct,
  addProduct,
} from "../controllers/productController.js";
import verifyToken from "../middlewares/verifyToken.js";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/find/:id", getSingleProduct);
router.post("/add", verifyToken, addProduct);

export default router;
