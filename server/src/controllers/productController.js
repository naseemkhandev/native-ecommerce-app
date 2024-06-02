import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

import Product from "../models/ProductModel.js";
import createError from "../utils/createError.js";
import getDataUri from "../utils/getDataUri.js";

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
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return next(createError(400, "Invalid Product ID"));

    const product = await Product.findById(id);

    if (!product) return next(createError(404, "Product Not Found"));

    res.status(200).json({
      message: "Product Fetched Successfully",
      product,
    });
  } catch (error) {
    next(error);
  }
};

export const addProduct = async (req, res, next) => {
  try {
    const file = getDataUri(req.file);
    const uploadedImage = await cloudinary.uploader.upload(file.content);
    const image = {
      public_id: uploadedImage.public_id,
      url: uploadedImage.secure_url,
    };

    const product = await Product.create({ ...req.body, images: [image] });

    res.status(201).json({
      message: "Product Added Successfully",
      product,
    });
  } catch (error) {
    next(error);
  }
};
