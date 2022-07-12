<template>
    <div class="columns">
        <div class="column is-12 is-size-3">
            FORM : {{ visualizar }}
        </div>
    </div>
    <hr />
    <div class="columns" v-if="notification.ativo">
        <div class="column is-12">
            <div :class="notification.classe">
                <button @click="onClickFecharNotificacao()" class="delete"></button>
                {{ notification.mensagem }}
            </div>
        </div>
    </div>
    <div class="columns" v-if="visualizar === 'detalhar'">
        <div class="column is-12 is-size-3">
            <label class="label">
                <input v-model="convenio.ativo" disabled checked type="checkbox">
                Ativar Convenio
            </label>
        </div>
    </div>
    <div class="columns" v-else>
        <div class="column is-12 is-size-3">
            <label class="label">
                <input v-model="convenio.ativo" checked type="checkbox">
                Ativar Convenio
            </label>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Nome</label>
            <div class="control">
                <input class="input is-primary" type="text" v-model="convenio.nome"
                    :readonly="visualizar === 'detalhar'" placeholder="Nome do Convenio">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Valor</label>
            <div class="control">
                <input class="input is-primary" type="number" v-model="convenio.valor"
                    :readonly="visualizar === 'detalhar'" placeholder="Valor do Convenio">
            </div>
        </div>
    </div>

    <hr />

    <div class="columns" v-if="visualizar === 'detalhar'">
        <div class="column is-6"></div>
        <div class="column is-2">
            <router-link to="/convenio/listar">
                <button class="button is-fullwidth">Voltar</button>
            </router-link>
        </div>
        <div class="column is-2">
            <button class="button is-fullwidth is-success " @click="onClickSairModoDetalhar()">Editar</button>
        </div>
        <div class="column is-2">
            <button class="button is-fullwidth is-success" @click="onClickDesativar()">Excluir</button>
        </div>
    </div>

    <div class="columns" v-if="visualizar === 'editar'">
        <div class="column is-6"></div>
        <div class="column is-2">
            <router-link to="/convenio/listar">
                <button class="button is-fullwidth">Voltar</button>
            </router-link>
        </div>
        <div class="column is-2">
            <button class="button is-fullwidth is-success " @click="onClickEditar()">Salvar as Alterações</button>
        </div>
        <div class="column is-2">
            <button class="button is-fullwidth is-success" @click="onClickDesativar()">Excluir</button>
        </div>
    </div>

    <div class="columns" v-if="visualizar === 'cadastrar'">
        <div class="column is-8"></div>
        <div class="column is-2">
            <router-link to="/convenio/listar">
                <button class="button is-fullwidth">Voltar</button>
            </router-link>
        </div>
        <div class="column is-2">
            <button class="button is-fullwidth is-success" @click="onClickCadastrar()">Cadastrar Convenio</button>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue } from 'vue-class-component';
import { Convenio } from "@/model/convenio.model";
import { Prop } from "vue-property-decorator";
import { Notification } from "@/model/notification.model";
import { ConvenioClient } from '@/client/convenio.client';


export default class ConvenioForm extends Vue {

    private convenioClient!: ConvenioClient
    convenio: Convenio = new Convenio()
    notification: Notification = new Notification()
    visualizar = 'detalhar'

    @Prop({ type: Number, required: false })
    private readonly id!: number

    @Prop({ type: String, default: false })
    private readonly model!: string

    public mounted(): void {
        this.convenioClient = new ConvenioClient()
        this.carregarConvenio()
    }

    onClickSairModoDetalhar(): void {
        this.visualizar = 'editar'
    }

    onClickCadastrar(): void {
        this.convenioClient.cadastrar(this.convenio).then(
            success => {
                this.notification = this.notification.new(true, 'notification is-success',
                    'O Convenio foi Cadastrado com sucesso')
                console.log(this.convenio)
                this.onClickLimpar()
            }, error => {
                this.notification = this.notification.new(true, 'notification is-danger',
                    'Error: ' + error)
                console.log(this.convenio)
                this.onClickLimpar()
            })
    }

    private carregarConvenio(): void {
        if (this.model === 'detalhar') {
            this.convenioClient.findById(this.id).then(value => {
                this.convenio = value
            }).catch(reason => {
                this.notification = reason
                console.log(this.notification)
            })
        } else {
            this.visualizar = 'cadastrar'
        }
    }

    onClickEditar(): void {
        this.convenioClient.editar(this.convenio).then(sucess => {
            this.notification = this.notification.new(true, 'notification is-success',
                'O Convenio foi editado com sucesso')
        }, error => {
            this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
        })
    }

    onClickDesativar(): void {
        this.convenioClient.desativar(this.convenio).then(sucess => {
            this.notification = this.notification.new(true, 'notification is-success',
                'O Convenio foi desativado com sucesso')
        }, error => {
            this.notification = this.notification.new(true, 'notification is-danger',
                'Error: ' + error)
        })
    }

    onClickFecharNotificacao(): void {
        this.notification = new Notification()
    }
    private onClickLimpar(): void {
        this.convenio = new Convenio()
    }
}

</script>