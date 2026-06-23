import { Router } from "express";
import { uploadFile } from "./controller.js";
import { upload } from "../../common/middleware/multer.middleware.js";

const fileUpload = Router();

// Don't forget the enctype="multipart/form-data" in your form.
fileUpload.post("/", upload.single(fileName), uploadFile);

export default fileUpload;
