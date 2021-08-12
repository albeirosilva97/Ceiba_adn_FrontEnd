export class Cita {
  id: number;
  nombre: string;
  idPersona: number;
  tipoServicio: number;
  costoServicio: number;
  fechaCita: string;

  constructor(
    id: number,
    nombre: string,
    idPersona: number,
    tipoServicio: number,
    costoServicio: number,
    fechaCita: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.idPersona = idPersona;
    this.tipoServicio = tipoServicio;
    this.costoServicio = costoServicio;
    this.fechaCita = fechaCita;
  }

}
