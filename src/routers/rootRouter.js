import express from "express";
import authRouter from "./authRoutes";
import getImagesRouter from "./getImagesRoute";

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/images", getImagesRouter);

export default rootRouter;
