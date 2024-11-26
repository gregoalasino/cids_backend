import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Desarrollador } from "../model";
import { ProyectoEntity } from "./ProyectoEntity";
import { RolEntity } from "./RolEntity";
import { TareaEntity } from "./TareaEntity";

@Entity({ name: "desarrolladores" })
export class DesarrolladorEntity implements Desarrollador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @ManyToOne(() => RolEntity, (rol) => rol.desarrollador, { eager: true })
  @JoinColumn({ name: "id_rol" })
  rol: RolEntity;

  @Column({ name: "fecha_contratacion", type: "date" }) // Mapeo explícito
  fechaContratacion: Date;

  @Column({ name: "fecha_creacion", type: "date" }) // Mapeo explícito
  fechaCreacion: Date;

  @Column({ name: "fecha_actualizacion", type: "date" }) // Mapeo explícito
  fechaActualizacion: Date;

  @OneToMany(() => ProyectoEntity, (proyecto) => proyecto.responsable)
  proyectosResponsable: ProyectoEntity[];

  @ManyToMany(() => ProyectoEntity, (proyecto) => proyecto.desarrolladores)
  proyectos: ProyectoEntity[];

  @OneToMany(() => TareaEntity, (tarea) => tarea.asignado)
  tareas: TareaEntity[];
}
