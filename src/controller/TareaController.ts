import { Request, Response } from "express";
import { TareaService } from "../service/TareaService";

export class TareaController {
  private service = new TareaService();

  async obtenerPorProyecto(req: Request, res: Response) {
    try {
      const tareas = await this.service.obtenerPorProyecto(parseInt(req.params.idProyecto));
      res.json(tareas);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener tareas", error });
    }
  }

  async crear(req: Request, res: Response) {
    try {
      const nuevaTarea = await this.service.crear(req.body);
      res.status(201).json(nuevaTarea);
    } catch (error) {
      res.status(500).json({ message: "Error al crear tarea", error });
    }
  }
}
