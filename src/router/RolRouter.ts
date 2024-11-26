import { Router } from "express";
import { RolController } from "../controller/RolController";

const router = Router();
const controller = new RolController();

router.get("/", controller.obtenerTodos.bind(controller));
router.post("/", controller.crear.bind(controller));

export default router;
