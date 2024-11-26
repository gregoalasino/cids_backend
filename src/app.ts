import express, { Express, json } from "express";
import cors from "cors";
import { ROUTES } from "./routes";
import { handleError, logHttpRequest } from "./middleware";

const app: Express = express();

app.use(
  cors({
    //origin: "http://localhost:4200",
  })
);

app.use(json());

app.use(logHttpRequest());

ROUTES.forEach(({ path, router }) => {
  app.use(path, router);
});

app.use(handleError);

export default app;
