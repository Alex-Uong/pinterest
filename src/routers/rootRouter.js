import express from "express";
import authRouter from "./authRoutes";
import getImagesRouter from "./getImagesRoute";
import imageDetailRouter from "./imageDetailRoute";

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/images", getImagesRouter);
rootRouter.use("/detail", imageDetailRouter);

export default rootRouter;
