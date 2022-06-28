import {AbstractEntity} from "./abstract-entity.model";
import {Convenio} from "./convenio.model";
import {TipoAtendimento} from "./tipo-atendimento.enum";

export class Paciente extends AbstractEntity{

    tipoAtendimento! : TipoAtendimento
    numeroCartaoConvenio! : string
    dataVencimento! : Date
    convenio! : Convenio
}