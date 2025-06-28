import express from "express";
import getImagesController from "../controllers/getImagesController";
import protect from "../common/middlewares/protect.middleware";

const getImagesRouter = express.Router();

// Tạo route CRUD
getImagesRouter.post("/", getImagesController.create);
getImagesRouter.get("/", protect, getImagesController.findAll);
getImagesRouter.get("/:id", getImagesController.findOne);
getImagesRouter.patch("/:id", getImagesController.update);
getImagesRouter.delete("/:id", getImagesController.remove);

export default getImagesRouter;
