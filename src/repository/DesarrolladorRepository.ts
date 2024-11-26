import dataSource from "../db"; // Importa la configuración de TypeORM
import { CrearDesarrolladorDto, ActualizarDesarrolladorDto } from "../dto"; // Importa los DTOs
import { DesarrolladorEntity } from "../entity"; // Importa la entidad DesarrolladorEntity
import { DatabaseException } from "../exception"; // Excepción personalizada
import { type Desarrollador } from "../model"; // Modelo de Desarrollador

const _desarrolladorRepository = dataSource.getRepository(DesarrolladorEntity);

// Método para obtener todos los desarrolladores con relaciones
const obtenerTodos = async (): Promise<DesarrolladorEntity[]> => {
  try {
    return await _desarrolladorRepository.find({
      relations: {
        rol: true, 
      },
    });
  } catch (error: any) {
    throw new DatabaseException(error.message);
  }
};

// Método para obtener un desarrollador por su ID con relaciones
const obtenerPorId = async (id: number): Promise<Desarrollador | null> => {
  try {
    return await _desarrolladorRepository.findOne({
      where: { id },
      relations: {
        rol: true, 
      },
    });
  } catch (error: any) {
    throw new DatabaseException(error.message);
  }
};

// Método para crear un nuevo desarrollador
const crear = async (payload: CrearDesarrolladorDto): Promise<Desarrollador> => {
    try {
      const nuevoDesarrollador: Omit<Desarrollador, "id"> = {
        ...payload,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date(),
        proyectosResponsable: [], 
        proyectos: [],
        tareas: [],
      };
  
      return await _desarrolladorRepository.save(nuevoDesarrollador);
    } catch (error: any) {
      throw new DatabaseException(error.message);
    }
  };
  

// Método para actualizar un desarrollador
const actualizar = async (id: number, payload: ActualizarDesarrolladorDto): Promise<Desarrollador> => {
  try {
    const datosActualizados: Pick<Desarrollador, "nombre" | "correo" | "rol" | "fechaContratacion" | "fechaActualizacion"> = {
      ...payload,
      fechaActualizacion: new Date(),
    };

    await _desarrolladorRepository.update(id, datosActualizados);

    // Retorna el desarrollador actualizado
    return (await obtenerPorId(id)) as Desarrollador;
  } catch (error: any) {
    throw new DatabaseException(error.message);
  }
};

// Método para eliminar un desarrollador
const eliminar = async (id: number): Promise<void> => {
  try {
    await _desarrolladorRepository.delete(id);
  } catch (error: any) {
    throw new DatabaseException(error.message);
  }
};

// Exporta todos los métodos como un objeto
export const DesarrolladorRepository = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar,
};
