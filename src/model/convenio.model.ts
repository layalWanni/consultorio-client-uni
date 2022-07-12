import {AbstractEntity} from "./abstract-entity.model";

export class Convenio extends AbstractEntity{
    nome! : string
    valor! : number

    constructor(){
        super();
        this.ativo = true
    }
}
