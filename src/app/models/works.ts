export class Works {

    id? : number;
    nombreE : string;
    puesto : string;
    fechaExp : string;
    descExp : string;
    imgExp : string;

    constructor(nombreE: string, puesto: string, fechaExp: string, descExp: string, imgExp: string) {
        this.nombreE = nombreE;
        this.puesto = puesto;
        this.fechaExp = fechaExp;
        this.descExp = descExp;
        this.imgExp = imgExp;
    }

}
