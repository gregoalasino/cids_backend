import { getRepository } from "typeorm";
import { RolEntity } from "../entity/RolEntity";

export class RolService {
  async obtenerTodos() {
    const repo = getRepository(RolEntity);
    return repo.find();
  }

  async crear(data: Partial<RolEntity>) {
    const repo = getRepository(RolEntity);
    const nuevoRol = repo.create(data);
    return repo.save(nuevoRol);
  }
}
