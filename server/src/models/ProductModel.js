import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Product name is required"] },
    price: { type: Number, required: [true, "Product price is required"] },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    stock: {
      type: Number,
      required: [true, "Product stock is required"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    images: [
      {
        url: {
          type: String,
          required: [true, "Product image url is required"],
        },
        public_id: {
          type: String,
          required: [true, "Product image public_id is required"],
        },
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
