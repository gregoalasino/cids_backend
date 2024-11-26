import { DataSource } from "typeorm";
import { DesarrolladorEntity } from "./entity/DesarrolladorEntity"; 
import { RolEntity } from "./entity/RolEntity";
import { EstadoEntity } from "./entity/EstadoEntity";
import { TareaEntity } from "./entity/TareaEntity";
import { ProyectoEntity } from "./entity/ProyectoEntity";

const dataSource = new DataSource({
  type: "postgres",
  host: "strikingly-cool-mullet.data-1.use1.tembo.io",
  port: 5432,
  username: "postgres",
  password: "tnxstXwXzubch6tZ",
  database: "postgres",
  entities: [DesarrolladorEntity, RolEntity, EstadoEntity, TareaEntity, ProyectoEntity],
  ssl: {
    rejectUnauthorized: false, // conexiones SSL sin verificación.
  },
  logging: true,
});

export default dataSource;
