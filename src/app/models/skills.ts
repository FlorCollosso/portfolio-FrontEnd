export class Skills {

    id? : number;
    nombreSkill : string;
    porcenSkill : number;

    constructor(nombreSkill: string, porcenSkill: number) {
        this.nombreSkill = nombreSkill;
        this.porcenSkill = porcenSkill;
    }
}
