import { Request, Response } from "express";
import { RolService } from "../service/RolService";


const obtenerRoles = async (req: Request, res: Response): Promise<Response> => {
  try {
    const roles = await RolService.obtenerRoles();
    console.log("Roles obtenidos del repositorio:", roles);
    return res.json(roles);
  } catch (error) {
    console.error("Error en RolController:", error);
    throw error;
  }
};

export const RolController = {
  obtenerRoles,
};
