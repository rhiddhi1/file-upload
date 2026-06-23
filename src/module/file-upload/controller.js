import { cloudinaryUploader } from "../../common/utils/cloudinary.js";
import { User } from "../../db/models.js";

export const uploadFile = async (req, res) => {
  try {
    const localPath = req.file.path;
    const result = await cloudinaryUploader(localPath);
    console.log(result.secure_url);
    const secureURL = result.secureURL;

    const newImage = new User({
      name: req.body.name,
      username: req.body.username,
      imageURL: secureURL,
    });

    await newImage.save();

    res.json({ url: result.secure_url, raw: result });
  } catch (error) {
    console.log(error);
  }
};
