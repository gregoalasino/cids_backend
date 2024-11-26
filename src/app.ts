import express, { Express } from "express";
import cors from "cors";
import registerRoutes from "./routes"; // Importa correctamente la función registerRoutes

const app: Express = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
registerRoutes(app); // Registra las rutas en la instancia de app

// Puerto
const PORT = 50505;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default app;
