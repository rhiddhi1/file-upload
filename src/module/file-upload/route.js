import { Router } from "express";

const fileUpload = Router();

fileUpload.post("/", (req, res) => {
  res.send("upload your file here");
});

export default fileUpload;
