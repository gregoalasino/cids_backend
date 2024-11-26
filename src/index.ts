import app from "./app";
import dataSource from "./db";

const PORT = 50505;

dataSource
  .initialize()
  .then(() => {
    console.log("Conexión a la base de datos establecida");
    app.listen(PORT, () => {
      console.log(`Aplicación corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al inicializar la conexión a la base de datos:", error);
  });
