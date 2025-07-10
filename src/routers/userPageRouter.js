import express from "express";
import protect from "../common/middlewares/protect.middleware";
import { userPageController } from "../controllers/userPageController";

const userPageRouter = express.Router();

// Tạo route CRUD
userPageRouter.post("/", userPageController.create);
userPageRouter.get("/", userPageController.findAll);
// lay thong tin user
userPageRouter.get("/:id", protect, userPageController.findOne);

// lay anh da luu cua user
userPageRouter.get("/:id/saved", protect, userPageController.findSaved);

// lay anh da tao cua user
userPageRouter.get("/:id/created", protect, userPageController.findCreated);

userPageRouter.patch("/:id", userPageController.update);

// xoa anh da tao theo id anh
userPageRouter.delete("/images/:id", protect, userPageController.remove);

export default userPageRouter;
