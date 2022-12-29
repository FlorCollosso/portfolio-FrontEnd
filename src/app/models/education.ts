export class Education {

    id? : number;
    tituloEdu : string;
    fechaEdu : string;
    imgEdu : string;

    constructor(tituloEdu : string, fechaEdu : string, imgEdu : string) {
        this.tituloEdu = tituloEdu;
        this.fechaEdu = fechaEdu;
        this.imgEdu = imgEdu;
    }
}
