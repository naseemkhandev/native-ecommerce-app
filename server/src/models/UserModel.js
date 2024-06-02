import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    username: { type: String, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email is already registered"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    isAdmin: { type: Boolean, default: false },
    profileImage: {
      public_id: { type: String },
      url: { type: String },
      default: {},
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
