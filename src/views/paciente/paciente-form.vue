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
        <input v-model="paciente.ativo" disabled checked type="checkbox">
        Ativar Paciente
      </label>
    </div>
  </div>
  <div class="columns" v-else>
    <div class="column is-12 is-size-3">
      <label class="label">
        <input v-model="paciente.ativo" checked type="checkbox">
        Ativar Paciente
      </label>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Nome</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="paciente.nome"
               :readonly="visualizar === 'detalhar'" placeholder="Nome do Paciente">
      </div>
    </div>
  </div>


<div class="control column is-one-fifth">
<label class="label"><p>Tipo de Atendimento: </p></label>
<div class="select is-black">
  <select  id="tipoAtendimento" v-model="paciente.tipoAtendimento">
    <option value="particular">Particular</option>
    <option value="convenio">Convenio</option>
  </select>
</div>
</div>

<div class="control column is-one-fifth">
<label class="label"><p>Convênio:</p></label>
<div class="select is-black">
  <select id="convenio" v-model="paciente.convenio.id">
    <option value="" disabled selected>Lista de convenios</option>
    <option v-for="item in convenioList" v-bind:key="item.id" v-bind:value="item.id">{{ item.nome}}</option>
  </select>
</div>
</div>

<div style="display: flex;">
<div class="control column is-one-fifth">
  <label class="label"><p>Número do cartão/convênio: </p></label>
  <input class="input is-black" type="text" v-model="paciente.numeroCartaoConvenio" placeholder="" :disabled="model==='detalhar'">
</div>

<div class="control column is-one-fifth">
  <label class="label"><p>Data de vencimento do cartão: </p></label>
  <input class="input is-black" type="date" v-model="paciente.dataVencimento" placeholder="" :disabled="model==='detalhar'">
</div>
</div>


  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">telefone</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="paciente.telefone"
               :readonly="visualizar === 'detalhar'" placeholder="Telefone do Paciente">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Celular</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="paciente.celular"
               :readonly="visualizar === 'detalhar'" placeholder="Celular do Paciente">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Nacionalidade</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="paciente.nacionalidade"
               :readonly="visualizar === 'detalhar'" placeholder="Nacionalidade do Paciente">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Cpf</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="paciente.cpf"
               :readonly="visualizar === 'detalhar'" placeholder="CPF do Paciente">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Rg</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="paciente.rg"
               :readonly="visualizar === 'detalhar'" placeholder="RG do Paciente">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Email</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="paciente.email"
               :readonly="visualizar === 'detalhar'" placeholder="Email do Paciente">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Login</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="paciente.login"
               :readonly="visualizar === 'detalhar'" placeholder="Login do Paciente">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Senha</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="paciente.senha"
               :readonly="visualizar === 'detalhar'" placeholder="Senha do Paciente">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Sexo</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="paciente.sexo"
               :readonly="visualizar === 'detalhar'" placeholder="Sexo do Paciente">
      </div>
    </div>
  </div>

  <hr />

  <div class="columns" v-if="visualizar === 'detalhar'">
    <div class="column is-6"></div>
    <div class="column is-2">
      <router-link to="/paciente/listar">
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
      <router-link to="/paciente/listar">
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
      <router-link to="/paciente/listar">
        <button class="button is-fullwidth is-light">Voltar</button>
      </router-link>
    </div>
    <div class="column is-3">
      <button class="button is-fullwidth is-info" @click="onClickCadastrar()">Cadastrar Paciente</button>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue } from 'vue-class-component';
import { Paciente } from "@/model/paciente.model";
import { Prop } from "vue-property-decorator";
import { Notification } from "@/model/notification.model";
import { PacienteClient } from '@/client/paciente.client';
import {ConvenioClient} from "@/client/convenio.client";
import {PageResponse} from "@/model/page/page-response";
import {Convenio} from "@/model/convenio.model";
import {PageRequest} from "@/model/page/page-request";


export default class PacienteForm extends Vue {

  public convenioClient!: ConvenioClient
  public convenioList: Convenio[] = []
  private pacienteClient!: PacienteClient
  public pageRequest: PageRequest = new PageRequest()
  public pageResponse: PageResponse<Convenio> = new PageResponse()

  paciente: Paciente = new Paciente()
  notification: Notification = new Notification()
  visualizar = 'detalhar'


  public listarConvenio(): void{
    this.convenioClient.findByFiltrosPaginado(this.pageRequest)
        .then(
            success => {
              this.pageResponse = success
              this.convenioList = this.pageResponse.content
            },
            error => console.log(error)
        )
  }

  @Prop({ type: Number, required: false })
  private readonly id!: number

  @Prop({ type: String, default: false })
  private readonly model!: string

  public mounted(): void {
    this.pacienteClient = new PacienteClient()
    this.carregarPaciente()
    this.convenioClient = new ConvenioClient()
    this.listarConvenio()
  }

  onClickSairModoDetalhar(): void {
    this.visualizar = 'editar'
  }

  onClickCadastrar(): void {
    this.pacienteClient.cadastrar(this.paciente).then(
        success => {
          this.notification = this.notification.new(true, 'notification is-success',
              'O Paciente foi Cadastrado com sucesso')
          console.log(this.paciente)
          this.onClickLimpar()
        }, error => {
          this.notification = this.notification.new(true, 'notification is-danger',
              'Error: ' + error)
          console.log(this.paciente)
          this.onClickLimpar()
        })
  }

  private carregarPaciente(): void {
    if (this.model === 'detalhar') {
      this.pacienteClient.findById(this.id).then(value => {
        this.paciente = value
      }).catch(reason => {
        this.notification = reason
        console.log(this.notification)
      })
    } else {
      this.visualizar = 'cadastrar'
    }
  }

  onClickEditar(): void {
    this.pacienteClient.editar(this.paciente).then(sucess => {
      this.notification = this.notification.new(true, 'notification is-success',
          'O Paciente foi editado com sucesso')
    }, error => {
      this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
    })
  }

  onClickDesativar(): void {
    this.pacienteClient.desativar(this.paciente).then(sucess => {
      this.notification = this.notification.new(true, 'notification is-success',
          'O Paciente foi desativado com sucesso')
    }, error => {
      this.notification = this.notification.new(true, 'notification is-danger',
          'Error: ' + error)
    })
  }

  onClickFecharNotificacao(): void {
    this.notification = new Notification()
  }
  private onClickLimpar(): void {
    this.paciente = new Paciente()
  }
}

</script>