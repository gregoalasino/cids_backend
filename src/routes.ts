import { Router } from "express";
import desarrolladorRouter from "./router/DesarrolladorRouter";
import rolRouter from "./router/RolRouter";
import tareaRouter from "./router/TareaRouter";

export const ROUTES: { path: string; router: Router }[] = [
  {
    path: "/desarrolladores",
    router: desarrolladorRouter,
  },
  {
    path: "/roles",
    router: rolRouter,
  },
  {
    path: "/tareas",
    router: tareaRouter,
  },
];

export default ROUTES;
