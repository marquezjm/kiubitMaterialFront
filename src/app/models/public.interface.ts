export interface Curso {
  id:string,
  nombre:string,
  imagen:string,
  descipcion:string,
  modulos:number,
  horas:number,
  minutos:number,
  segundos:number,
  listaModulos:Modulo[],
}

export interface Testimonio {
  sexo:string,
  texto:string,
  nombre:string,
}

export interface Servicio{
  imagen:string,
  titulo:string,
  texto:string
}

export interface CommonResponse<T>{
  response:T,
  success:boolean,
  message:string,
}

export interface Modulo{
  id:string,
  idCurso:string,
  nombre:string,
  descripcion:string,
  horas:number,
  minutos:number,
  segundos:number,
  listaTemas:Tema[],
}

export interface Tema{
  id:string,
  idModulo:string,
  nombre:string,
  descripcion:string,
  horas:number,
  minutos:number,
  segundos:number,
}
