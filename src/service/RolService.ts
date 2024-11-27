import { DatabaseException } from "../exception";
import { Rol } from "../model";
import { RolRepository } from "../repository";

const crearRol = async (nombre: string): Promise<Rol> => {
  try {
    if (!nombre) {
      throw new DatabaseException("El nombre del rol es obligatorio");
    }

    // Llamada al repositorio para guardar el nuevo rol
    return await RolRepository.crearRol(nombre);
  } catch (error: any) {
    console.error("Error en RolService:", error);
    throw new DatabaseException(error.message);
  }
};

const obtenerRoles = (): Promise<Rol[]> => {
  try {
    return RolRepository.obtenerRoles();
  } catch (error: any) {
    console.error("Error en RolService:", error);
    throw new DatabaseException(error.message);
  }
};

export const RolService = {
  obtenerRoles,
  crearRol,
};
