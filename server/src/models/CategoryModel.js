import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    category: { type: String, required: [true, "Category name is required"] },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
