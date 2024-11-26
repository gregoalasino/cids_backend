import { getRepository } from "typeorm";
import { TareaEntity } from "../entity/TareaEntity";

export class TareaService {
  async obtenerPorProyecto(idProyecto: number) {
    const repo = getRepository(TareaEntity);
    return repo.find({
      where: {
        proyecto: { id: idProyecto }, // Cambiado a buscar el ID dentro de la relación
      },
      relations: ["estado", "proyecto"], // Asegúrate de cargar las relaciones necesarias
    });
  }

  async crear(data: Partial<TareaEntity>) {
    const repo = getRepository(TareaEntity);
    const nuevaTarea = repo.create(data);
    return repo.save(nuevaTarea);
  }
}
