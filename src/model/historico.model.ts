import {StatusAgenda} from "./status-agenda.enum";
import {Secretaria} from "./secretaria.model";
import {Paciente} from "./paciente.model";
import {Agenda} from "./agenda.model";
import { AbstractEntity } from "./abstract-entity.model";

export class Historico extends AbstractEntity{
    statusAgenda! : StatusAgenda
    observacao! : string
    secretaria! : Secretaria
    paciente! : Paciente
    agenda! : Agenda
}