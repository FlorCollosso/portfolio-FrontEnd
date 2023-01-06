export class person {
    id?:number;
    nombre:string;
    apellido:string;
    titulo:string;
    descripcion:string;
    fotoPerfil:string;
    numTel:string;

    constructor(nombre:string, apellido:string, titulo:string, descripcion:string, fotoPerfil:string, numTel:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fotoPerfil = fotoPerfil;
        this.numTel = numTel;
    }
}