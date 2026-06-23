import { cloudinaryUploader } from "../../common/utils/cloudinary.js";

export const uploadFile = async (req, res) => {
  console.log(req.file.path);
  cloudinaryUploader(req.file.path);
  // res.send("upload your file here");
};
