import { cloudinaryUploader } from "../../common/utils/cloudinary.js";

export const uploadFile = async (req, res) => {
  const localPath = req.file.path;
  const result = await cloudinaryUploader(localPath);
  console.log(result);
};
