export interface Curso{
    id:number;
    nombre:string;
    descripcion:string;
    estado:string;
    tipo:string;
    prerequisitos:string[];
    disponibilidad:string;
    mentor:string;
}