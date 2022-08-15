<template>
  <div class="columns">
    <div class="column is-12 is-size-3">
      {{ visualizar }}
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
        <input v-model="especialidade.ativo" disabled checked type="checkbox">
        Ativar Especialidade
      </label>
    </div>
  </div>
  <div class="columns" v-else>
    <div class="column is-12 is-size-3">
      <label class="label">
        <input v-model="especialidade.ativo" checked type="checkbox">
        Ativar Especialidade
      </label>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Nome</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="especialidade.nome"
               :readonly="visualizar === 'detalhar'" placeholder="Nome da Especialidade">
      </div>
    </div>
  </div>

  <hr />

  <div class="columns" v-if="visualizar === 'detalhar'">
    <div class="column is-6"></div>
    <div class="column is-2">
      <router-link to="/especialidade/listar">
        <button class="button is-fullwidth is-light">Voltar</button>
      </router-link>
    </div>
    <div class="column is-2">
      <button class="button is-fullwidth is-info " @click="onClickSairModoDetalhar()">Editar</button>
    </div>
    <div class="column is-2">
      <button class="button is-fullwidth is-danger" @click="onClickDesativar()">Excluir</button>
    </div>
  </div>

  <div class="columns" v-if="visualizar === 'editar'">
    <div class="column is-6"></div>
    <div class="column is-2">
      <router-link to="/especialidade/listar">
        <button class="button is-fullwidth is-light">Voltar</button>
      </router-link>
    </div>
    <div class="column is-2">
      <button class="button is-fullwidth is-info " @click="onClickEditar()">Salvar as Alterações</button>
    </div>
    <div class="column is-2">
      <button class="button is-fullwidth is-danger" @click="onClickDesativar()">Excluir</button>
    </div>
  </div>

  <div class="columns" v-if="visualizar === 'cadastrar'">
    <div class="column is-8"></div>

    <div class="column is-1">
      <router-link to="/especialidade/listar">
        <button class="button is-fullwidth is-light">Voltar</button>
      </router-link>
    </div>
    <div class="column is-3">
      <button class="button is-fullwidth is-info" @click="onClickCadastrar()">Cadastrar Especialidade</button>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue } from 'vue-class-component';
import { Especialidade } from "@/model/especialidade.model";
import { Prop } from "vue-property-decorator";
import { Notification } from "@/model/notification.model";
import { EspecialidadeClient } from '@/client/especialidade.client';


export default class EspecialidadeForm extends Vue {

  private especialidadeClient!: EspecialidadeClient
  especialidade: Especialidade = new Especialidade()
  notification: Notification = new Notification()
  visualizar = 'detalhar'

  @Prop({ type: Number, required: false })
  private readonly id!: number

  @Prop({ type: String, default: false })
  private readonly model!: string

  public mounted(): void {
    this.especialidadeClient = new EspecialidadeClient()
    this.carregarEspecialidade()
  }

  onClickSairModoDetalhar(): void {
    this.visualizar = 'editar'
  }

  onClickCadastrar(): void {
    this.especialidadeClient.cadastrar(this.especialidade).then(
        success => {
          this.notification = this.notification.new(true, 'notification is-success',
              'A Especialidade foi Cadastrado com sucesso')
          console.log(this.especialidade)
          this.onClickLimpar()
        }, error => {
          this.notification = this.notification.new(true, 'notification is-danger',
              'Error: ' + error)
          console.log(this.especialidade)
          this.onClickLimpar()
        })
  }

  private carregarEspecialidade(): void {
    if (this.model === 'detalhar') {
      this.especialidadeClient.findById(this.id).then(value => {
        this.especialidade = value
      }).catch(reason => {
        this.notification = reason
        console.log(this.notification)
      })
    } else {
      this.visualizar = 'cadastrar'
    }
  }

  onClickEditar(): void {
    this.especialidadeClient.editar(this.especialidade).then(sucess => {
      this.notification = this.notification.new(true, 'notification is-success',
          'A Especialidade foi editado com sucesso')
    }, error => {
      this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
    })
  }

  onClickDesativar(): void {
    this.especialidadeClient.desativar(this.especialidade).then(sucess => {
      this.notification = this.notification.new(true, 'notification is-success',
          'A Especialidade foi desativado com sucesso')
    }, error => {
      this.notification = this.notification.new(true, 'notification is-danger',
          'Error: ' + error)
    })
  }

  onClickFecharNotificacao(): void {
    this.notification = new Notification()
  }
  private onClickLimpar(): void {
    this.especialidade = new Especialidade()
  }
}

</script>