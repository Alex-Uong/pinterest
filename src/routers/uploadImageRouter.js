import express from "express";
import protect from "../common/middlewares/protect.middleware";
import { upload } from "../common/multer/uploadLocal";
import { uploadImageController } from "../controllers/uploadImageController";

const uploadImageRouter = express.Router();

uploadImageRouter.post(
  "/",
  protect,
  upload.single("image"),
  uploadImageController.create
);

export default uploadImageRouter;
