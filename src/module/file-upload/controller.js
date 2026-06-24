import { cloudinaryUploader } from "../../common/utils/cloudinary.js";
import { sendEmail } from "../../common/utils/resend-email.js";
import { User } from "../../db/models.js";
import fs from "node:fs";

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const localPath = req.file.path;
    const result = await cloudinaryUploader(localPath);
    const secureURL = result.secure_url;

    const newImage = new User({
      name: req.body.name,
      username: req.body.username,
      imageURL: secureURL,
    });

    await newImage.save();

    fs.unlinkSync(localPath);

    await sendEmail({ imageUrl: secureURL });

    res.json({
      url: secureURL,
      raw: result,
      message: "Image received",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Upload failed" });
  }
};
