import express from "express";
import { imageDetailController } from "../controllers/imageDetailController";
import protect from "../common/middlewares/protect.middleware";

const imageDetailRouter = express.Router();

// Tạo route CRUD
imageDetailRouter.post("/", imageDetailController.create);
imageDetailRouter.get("/", imageDetailController.findAll);
imageDetailRouter.get("/:id", imageDetailController.findOne);
imageDetailRouter.get("/:id/comments", imageDetailController.findMany);
imageDetailRouter.patch("/:id", imageDetailController.update);
imageDetailRouter.delete("/:id", imageDetailController.remove);
imageDetailRouter.get(
  "/:id/saved",
  protect,
  imageDetailController.isImageSavedByUser
);
imageDetailRouter.post(
  "/:id/comments",
  protect,
  imageDetailController.addCommentToImage
);

export default imageDetailRouter;
