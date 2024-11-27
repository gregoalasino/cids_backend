import { NextFunction, Request, Response, Router } from "express";
import { RolController } from "../controller/RolController";
import dataSource from "../db";
import { RolEntity } from "../entity";


const RolRouter = Router();

RolRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await RolController.obtenerRoles(req, res);
  } catch (error) {
    next(error);
  }
});

RolRouter.post('/', async (req: Request, res: Response) => {
  console.log('Body recibido:', req.body);
  try {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).send({ message: 'El nombre del rol es obligatorio' });
    }

    const nuevoRol = new RolEntity();
    nuevoRol.nombre = nombre;

    await dataSource.manager.save(nuevoRol);

    res.status(201).send(nuevoRol);
  } catch (error) {
    console.error('Error al crear el rol:', error);
    res.status(500).send({ message: 'Error al crear el rol' });
  }
});

export default RolRouter;
