import {Sexo} from "./sexo.enum";
import {AbstractEntity} from "./abstract-entity.model";

export class Pessoa extends AbstractEntity{

    nome!: string
    telefone!: string
    celular!: string
    nacionalidade!: string
    cpf!: string
    rg!: string
    email!: string
    login!: string
    senha!: string
    sexo!: Sexo

    constructor() {
        super()
        this.ativo = true
    }
}