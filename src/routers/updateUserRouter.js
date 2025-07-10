import express from "express";
import { updateUserController } from "../controllers/updateRouterController";
import protect from "../common/middlewares/protect.middleware";

const updateUserRouter = express.Router();

// Tạo route CRUD
updateUserRouter.put("/me", protect, updateUserController.update);

export default updateUserRouter;
