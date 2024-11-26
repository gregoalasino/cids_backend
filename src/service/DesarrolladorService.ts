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

  async actualizar(id: number, data: Partial<DesarrolladorEntity>) {
    const repo = dataSource.getRepository(DesarrolladorEntity);
  
    // Busca el desarrollador existente
    const desarrollador = await repo.findOne({
      where: { id },
      relations: ["rol"], // Incluye las relaciones si es necesario
    });
  
    if (!desarrollador) {
      throw new NotFoundException("Desarrollador no encontrado");
    }
  
    // Actualiza las propiedades del desarrollador
    Object.assign(desarrollador, data);
  
    // Guarda los cambios
    return repo.save(desarrollador);
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
