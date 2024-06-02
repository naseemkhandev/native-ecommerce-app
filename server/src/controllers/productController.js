import Product from "../models/ProductModel.js";
import createError from "../utils/createError.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    if (!products.length) return next(createError(404, "No Products Found"));

    res.status(200).json({
      message: "All Products Fetched Successfully",
      products,
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) return next(createError(404, "Product Not Found"));

    res.status(200).json({
      message: "Product Fetched Successfully",
      product,
    });
  } catch (error) {
    next(error);
  }
};
