import express, { Express, json } from "express";
import cors from "cors";
import { ROUTES } from "./routes";

const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.use(json());

ROUTES.forEach(({ path, router }) => {
  app.use(path, router);
});

export default app;
