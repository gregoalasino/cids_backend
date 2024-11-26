import { Express } from "express";
import desarrolladorRouter from "./router/DesarrolladorRouter";
import rolRouter from "./router/RolRouter";
import tareaRouter from "./router/TareaRouter";

export const registerRoutes = (app: Express) => {
  app.use("/desarrolladores", desarrolladorRouter);
  app.use("/roles", rolRouter);
  app.use("/tareas", tareaRouter);
};

export default registerRoutes;