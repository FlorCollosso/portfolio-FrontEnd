export class Projects {

    id? : number;
    tituloPro : string;
    fechaPro : string;
    descPro : string;
    urlPro : string;
    imgPro : string;

    constructor(tituloPro : string, fechaPro : string, descPro : string, urlPro : string, imgPro : string) {
        this.tituloPro = tituloPro;
        this.fechaPro = fechaPro;
        this.descPro = descPro;
        this.urlPro = urlPro;
        this.imgPro = imgPro;
    }
}
