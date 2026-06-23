import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log(`MongoDB connection established`);
  } catch (error) {
    console.log(`Database conneciton failed ${error}`);
    process.exit(1);
  }
};
