import express from "express";
import { json } from "node:stream/consumers";
import fileUpload from "./module/file-upload/route.js";

export const createApplication = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/upload", fileUpload);

  return app;
};
