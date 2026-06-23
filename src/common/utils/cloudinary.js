import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_URL,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const cloudinaryUploader = (uploadURL) => {
  cloudinary.uploader
    .upload(uploadURL)
    .then((result) => console.log(result));
};
