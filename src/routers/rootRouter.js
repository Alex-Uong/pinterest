import express from "express";
import authRouter from "./authRoutes";
import getImagesRouter from "./getImagesRoute";
import imageDetailRouter from "./imageDetailRoute";
import userPageRouter from "./userPageRouter";
import uploadImageRouter from "./uploadImageRouter";
import updateUserRouter from "./updateUserRouter";

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/images", getImagesRouter);
rootRouter.use("/detail", imageDetailRouter);
rootRouter.use("/user", userPageRouter);
rootRouter.use("/add-image", uploadImageRouter);
rootRouter.use("/update-user", updateUserRouter);

export default rootRouter;
