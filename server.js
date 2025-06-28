import express from "express";
import { PORT } from "./src/common/constant/app.constant";
import rootRouter from "./src/routers/rootRouter";

const app = express();

app.use(express.json());

app.use(rootRouter);

app.listen(PORT, () => {
  console.log("server start");
});
