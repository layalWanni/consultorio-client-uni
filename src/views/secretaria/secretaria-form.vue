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
        <input v-model="secretaria.ativo" disabled checked type="checkbox">
        Ativar Secretaria
      </label>
    </div>
  </div>
  <div class="columns" v-else>
    <div class="column is-12 is-size-3">
      <label class="label">
        <input v-model="secretaria.ativo" checked type="checkbox">
        Ativar Secretaria
      </label>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Nome</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="secretaria.nome"
               :readonly="visualizar === 'detalhar'" placeholder="Nome da Secretaria">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Salario</label>
      <div class="control">
        <input class="input is-black" type="number" v-model="secretaria.salario"
               :readonly="visualizar === 'detalhar'" placeholder="Valor do Salario da Secretaria">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Data de Contratação</label>
      <div class="control">
        <input class="input is-black" type="datetime-local" v-model="secretaria.dataContratacao"
               :readonly="visualizar === 'detalhar'" placeholder="Data de Contratacao da Secretaria">
      </div>
    </div>
  </div>


  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Pis</label>
      <div class="control">
        <input class="input is-black" type="number" v-model="secretaria.pis"
               :readonly="visualizar === 'detalhar'" placeholder="Pis da Secretaria">
      </div>
    </div>
  </div>

<div class="columns">
<div class="column is-12 is-size-3">
  <label class="label">telefone</label>
  <div class="control">
    <input class="input is-black" type="text" v-model="secretaria.telefone"
           :readonly="visualizar === 'detalhar'" placeholder="Telefone da Secretaria">
  </div>
</div>
</div>

<div class="columns">
<div class="column is-12 is-size-3">
  <label class="label">Celular</label>
  <div class="control">
    <input class="input is-black" type="text" v-model="secretaria.celular"
           :readonly="visualizar === 'detalhar'" placeholder="Celular da Secretaria">
  </div>
</div>
</div>

<div class="columns">
<div class="column is-12 is-size-3">
  <label class="label">Nacionalidade</label>
  <div class="control">
    <input class="input is-black" type="text" v-model="secretaria.nacionalidade"
           :readonly="visualizar === 'detalhar'" placeholder="Nacionalidade da Secretaria">
  </div>
</div>
</div>

<div class="columns">
<div class="column is-12 is-size-3">
  <label class="label">Cpf</label>
  <div class="control">
    <input class="input is-black" type="text" v-model="secretaria.cpf"
           :readonly="visualizar === 'detalhar'" placeholder="CPF da Secretaria">
  </div>
</div>
</div>

<div class="columns">
<div class="column is-12 is-size-3">
  <label class="label">Rg</label>
  <div class="control">
    <input class="input is-black" type="text" v-model="secretaria.rg"
           :readonly="visualizar === 'detalhar'" placeholder="RG da Secretaria">
  </div>
</div>
</div>

<div class="columns">
<div class="column is-12 is-size-3">
  <label class="label">Email</label>
  <div class="control">
    <input class="input is-black" type="text" v-model="secretaria.email"
           :readonly="visualizar === 'detalhar'" placeholder="Email da Secretaria">
  </div>
</div>
</div>

<div class="columns">
<div class="column is-12 is-size-3">
  <label class="label">Login</label>
  <div class="control">
    <input class="input is-black" type="text" v-model="secretaria.login"
           :readonly="visualizar === 'detalhar'" placeholder="Login da Secretaria">
  </div>
</div>
</div>

<div class="columns">
<div class="column is-12 is-size-3">
  <label class="label">Senha</label>
  <div class="control">
    <input class="input is-black" type="text" v-model="secretaria.senha"
           :readonly="visualizar === 'detalhar'" placeholder="Senha da Secretaria">
  </div>
</div>
</div>

<div class="columns">
<div class="column is-12 is-size-3">
  <label class="label">Sexo</label>
  <div class="control">
    <input class="input is-black" type="text" v-model="secretaria.sexo"
           :readonly="visualizar === 'detalhar'" placeholder="Sexo da Secretaria">
  </div>
</div>
</div>

  <hr />

  <div class="columns" v-if="visualizar === 'detalhar'">
    <div class="column is-6"></div>
    <div class="column is-2">
      <router-link to="/secretaria/listar">
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
      <router-link to="/secretaria/listar">
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
    <div class="column is-2">
      <router-link to="/secretaria/listar">
        <button class="button is-fullwidth is-light">Voltar</button>
      </router-link>
    </div>
    <div class="column is-2">
      <button class="button is-fullwidth is-info" @click="onClickCadastrar()">Cadastrar Secretaria</button>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue } from 'vue-class-component';
import { Secretaria } from "@/model/secretaria.model";
import { Prop } from "vue-property-decorator";
import { Notification } from "@/model/notification.model";
import { SecretariaClient } from '@/client/secretaria.client';


export default class SecretariaForm extends Vue {

  private secretariaClient!: SecretariaClient
  secretaria: Secretaria = new Secretaria()
  notification: Notification = new Notification()
  visualizar = 'detalhar'

  @Prop({ type: Number, required: false })
  private readonly id!: number

  @Prop({ type: String, default: false })
  private readonly model!: string

  public mounted(): void {
    this.secretariaClient = new SecretariaClient()
    this.carregarSecretaria()
  }

  onClickSairModoDetalhar(): void {
    this.visualizar = 'editar'
  }

  onClickCadastrar(): void {
    this.secretariaClient.cadastrar(this.secretaria).then(
        success => {
          this.notification = this.notification.new(true, 'notification is-success',
              'O Secretaria foi Cadastrado com sucesso')
          console.log(this.secretaria)
          this.onClickLimpar()
        }, error => {
          this.notification = this.notification.new(true, 'notification is-danger',
              'Error: ' + error)
          console.log(this.secretaria)
          this.onClickLimpar()
        })
  }

  private carregarSecretaria(): void {
    if (this.model === 'detalhar') {
      this.secretariaClient.findById(this.id).then(value => {
        this.secretaria = value
      }).catch(reason => {
        this.notification = reason
        console.log(this.notification)
      })
    } else {
      this.visualizar = 'cadastrar'
    }
  }

  onClickEditar(): void {
    this.secretariaClient.editar(this.secretaria).then(sucess => {
      this.notification = this.notification.new(true, 'notification is-success',
          'O Secretaria foi editado com sucesso')
    }, error => {
      this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
    })
  }

  onClickDesativar(): void {
    this.secretariaClient.desativar(this.secretaria).then(sucess => {
      this.notification = this.notification.new(true, 'notification is-success',
          'O Secretaria foi desativado com sucesso')
    }, error => {
      this.notification = this.notification.new(true, 'notification is-danger',
          'Error: ' + error)
    })
  }

  onClickFecharNotificacao(): void {
    this.notification = new Notification()
  }
  private onClickLimpar(): void {
    this.secretaria = new Secretaria()
  }
}

</script>