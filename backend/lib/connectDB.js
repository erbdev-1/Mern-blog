import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("Error: ", error);
  }
};

export default connectDB;
