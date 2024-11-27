import dataSource from "../db";
import { RolEntity } from "../entity";
import { DatabaseException } from "../exception";
//import { Rol } from "../model/Rol";
import { Rol } from '../entity/RolEntity';


const _rolRepository = dataSource.getRepository(RolEntity);

const obtenerRoles = (): Promise<Rol[]> => {
  try {
    return _rolRepository.find();
  } catch (error: any) {
    throw new DatabaseException(error.message);
  }
};

const crearRol = async (nombre: string): Promise<RolEntity> => {
  try {
    const nuevoRol = new RolEntity();
    nuevoRol.nombre = nombre;

    return await dataSource.manager.save(nuevoRol);
  } catch (error: any) {
    console.error("Error en RolRepository:", error);
    throw new Error("No se pudo crear el rol");
  }
};

export const RolRepository = {
  obtenerRoles,
  crearRol
};
