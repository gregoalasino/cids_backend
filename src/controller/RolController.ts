import { Request, Response } from "express";
import { RolService } from "../service/RolService";

export class RolController {
  private service = new RolService();

  async obtenerTodos(req: Request, res: Response) {
    try {
      const roles = await this.service.obtenerTodos();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener roles", error });
    }
  }

  async crear(req: Request, res: Response) {
    try {
      const nuevoRol = await this.service.crear(req.body);
      res.status(201).json(nuevoRol);
    } catch (error) {
      res.status(500).json({ message: "Error al crear rol", error });
    }
  }
}
