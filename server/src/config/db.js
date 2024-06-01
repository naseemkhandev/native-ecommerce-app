import mongoose from "mongoose";
import { config } from "./config.js";

const connectToDB = async () => {
  try {
    await mongoose
      .connect(config.mongoUri)
      .then(() => console.log("MongoDB connected successfully"))
      .catch((error) =>
        console.log(`Error while connecting to MongoDB ${error}`)
      );
  } catch (error) {
    console.log(`MongoDB Connection Failed: ${error}`);
    process.exit(1);
  }
};

export default connectToDB;
