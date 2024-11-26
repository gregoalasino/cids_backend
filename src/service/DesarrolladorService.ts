// import { AppDataSource } from "../db"; // Importamos el AppDataSource configurado en db.ts
import dataSource from "../db";
import { DesarrolladorEntity } from "../entity/DesarrolladorEntity";
import { NotFoundException } from "../exception/NotFoundException";
import { Desarrollador } from "../model";

export class DesarrolladorService {
  async obtenerTodos() {
    const repo = dataSource.getRepository(DesarrolladorEntity);
    return repo.find({
      relations: ["rol"],
    });
  }

  async crear(data: Partial<DesarrolladorEntity>) {
    const repo = dataSource.getRepository(DesarrolladorEntity);
    const nuevoDesarrollador = repo.create(data); // crear una nueva entidad
    return repo.save(nuevoDesarrollador); // guardar entidad
  }

  async eliminar(id: number) {
    const repo = dataSource.getRepository(DesarrolladorEntity);
    const resultado = await repo.delete(id); // eliminar entidad por id
    if (!resultado.affected) {
      throw new Error("Desarrollador no encontrado"); // control de errores
    }
    return { message: "Desarrollador eliminado correctamente" }; 
  }
}
