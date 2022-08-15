import {Convenio} from "./convenio.model";
import {TipoAtendimento} from "./tipo-atendimento.enum";
import {Pessoa} from "@/model/pessoa.model";

export class Paciente extends Pessoa{

    tipoAtendimento! : TipoAtendimento
    numeroCartaoConvenio! : string
    dataVencimento! : string
    convenio! : Convenio

    constructor() {
        super()
        this.ativo = true
        this.convenio = new Convenio()
    }
}