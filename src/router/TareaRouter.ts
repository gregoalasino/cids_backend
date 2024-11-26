import { Router } from "express";
import { TareaController } from "../controller/TareaController";

const router = Router();
const controller = new TareaController();

router.get("/proyecto/:idProyecto", controller.obtenerPorProyecto.bind(controller));
router.post("/", controller.crear.bind(controller));

export default router;
