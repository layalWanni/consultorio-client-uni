import {Pessoa} from "@/model/pessoa.model";
import {Especialidade} from "@/model/especialidade.model";

export class Secretaria extends Pessoa{
    salario! : number
    dataContratacao! : Date
    pis! : string

    constructor() {
        super()
        this.ativo = true
    }
}