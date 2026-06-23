import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    username: { type: String, required: false },
    imageURL: { type: String, required: true },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", schema);
