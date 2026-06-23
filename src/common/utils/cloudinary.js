import { v2 as cloudinary } from "cloudinary";
import path from "node:path";

if (process.env.CLOUDINARY_URL) {
  cloudinary.config(process.env.CLOUDINARY_URL);
} else {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

export const cloudinaryUploader = async (uploadURL) => {
  const absolutePath = path.resolve(uploadURL);
  console.log("Uploading to Cloudinary:", absolutePath);
  try {
    const result = await cloudinary.uploader.upload(absolutePath);
    console.log("Cloudinary upload success:", result.secure_url);
    return result;
  } catch (err) {
    console.error("Cloudinary upload error:", err.message);
    throw err;
  }
};
