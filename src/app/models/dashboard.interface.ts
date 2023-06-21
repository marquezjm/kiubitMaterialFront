export interface SeleccionarUltimoVistoResponse{
    id:string;
    nombre_curso: string;
    nombre_modulo: string;
    tipo_modulo: string;
    duracion_modulo: number;
    nombre_tema: string;
    tipo_tema: string;
    duracion_tema: number;
}

export interface SeleccionarSuscripcionesUsuarioResponse{
    id_curso:string;
    nombre_curso:string;
    imagen:string;
    modulos:number;
    horas:number;
    minutos:number;
    segundos:number;
}