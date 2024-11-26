// crear los verbos http para desarrolladores
import  dataSource  from "../db";
import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { DesarrolladorEntity } from "../entity/DesarrolladorEntity";

const router = Router();

// obtener todos los desarrolladores
router.get("/", async (req: Request, res: Response) => {
  try {
    const desarrolladores = await dataSource.getRepository(DesarrolladorEntity).find();
    res.json(desarrolladores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los desarrolladores" });
  }
});

// Crear un nuevo desarrollador
router.post("/", async (req: Request, res: Response) => {
  try {
    const repo = dataSource.getRepository(DesarrolladorEntity);
    const nuevoDesarrollador = repo.create(req.body);
    const resultado = await repo.save(nuevoDesarrollador);
    res.status(201).json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el desarrollador" });
  }
});

// Actualizar un desarrollador existente
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10); // Convierte el ID a un número
        const repo = dataSource.getRepository(DesarrolladorEntity); // Asegúrate de que `getRepository` esté correctamente configurado
        const desarrollador = await repo.findOneBy({ id });

        if (!desarrollador) {
            return res.status(404).json({ message: 'Desarrollador no encontrado' });
        }

        repo.merge(desarrollador, req.body); // Actualiza las propiedades del desarrollador
        const resultado = await repo.save(desarrollador); // Guarda los cambios en la base de datos

        return res.status(200).json(resultado);
    } catch (error) {
        console.error('Error al actualizar desarrollador:', error);
        return res.status(500).json({ message: 'Error al actualizar desarrollador' });
    }
});

// Eliminar un desarrollador
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const repo = dataSource.getRepository(DesarrolladorEntity);
    const resultado = await repo.delete(id);

    if (resultado.affected === 0) {
      return res.status(404).json({ message: "Desarrollador no encontrado" });
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el desarrollador" });
  }
});

export default router;
