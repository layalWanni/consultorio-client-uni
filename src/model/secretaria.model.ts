import {AbstractEntity} from "./abstract-entity.model";

export class Secretaria extends AbstractEntity{
    salario! : number
    dataContratacao! : Date
    pis! : string
}