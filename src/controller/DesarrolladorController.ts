import { Request, Response } from "express";
import { DesarrolladorService } from "../service/DesarrolladorService";
import { NotFoundException } from "../exception";

export class DesarrolladorController {
  private service = new DesarrolladorService();

  async obtenerTodos(req: Request, res: Response) {
    try {
      const desarrolladores = await this.service.obtenerTodos();
      res.json(desarrolladores);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener desarrolladores", error });
    }
  }

  async crear(req: Request, res: Response) {
    try {
      const nuevoDesarrollador = await this.service.crear(req.body);
      res.status(201).json(nuevoDesarrollador);
    } catch (error) {
      res.status(500).json({ message: "Error al crear desarrollador", error });
    }
  }

  async actualizar(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id); // Obtener el ID del desarrollador de los parámetros
      const data = req.body; // Obtener los datos del cuerpo de la solicitud
  
      // Llamar al servicio para actualizar
      const desarrolladorActualizado = await this.service.actualizar(id, data);
  
      res.status(200).json(desarrolladorActualizado); // Responder con el desarrollador actualizado
    } catch (error) {
      if (error instanceof NotFoundException) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Error al actualizar desarrollador", error });
      }
    }
  }

  async eliminar(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await this.service.eliminar(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar desarrollador", error });
    }
  }
}
