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
        <input v-model="medico.ativo" disabled checked type="checkbox">
        Ativar Medico
      </label>
    </div>
  </div>
  <div class="columns" v-else>
    <div class="column is-12 is-size-3">
      <label class="label">
        <input v-model="medico.ativo" checked type="checkbox">
        Ativar Medico
      </label>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Nome</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="medico.nome"
               :readonly="visualizar === 'detalhar'" placeholder="Nome da Medico">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">CRM</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="medico.crm"
               :readonly="visualizar === 'detalhar'" placeholder="crm da Medico">
      </div>
    </div>
  </div>


  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Consultorio</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="medico.consultorio"
               :readonly="visualizar === 'detalhar'" placeholder="Consultorio da Medico">
      </div>
    </div>
  </div>


  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Porcentagem de Participaçao</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="medico.porcentagemParticipacao"
               :readonly="visualizar === 'detalhar'" placeholder="Porcentagem de Participaçao da Medico">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Valor de Consulta</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="medico.valorConsulta"
               :readonly="visualizar === 'detalhar'" placeholder="Valor de Consulta da Medico">
      </div>
    </div>
  </div>

  <div class="control column is-one-fifth">
    <label class="label">Especialidade:</label>
    <div class="select is-black">
      <select id="especialidade" v-model="medico.especialidade.id">
        <option value="" disabled selected>Lista de especialidades</option>
        <option v-for="item in especialidadeList" v-bind:key="item.id" v-bind:value="item.id">{{ item.nome}}</option>
      </select>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">telefone</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="medico.telefone"
               :readonly="visualizar === 'detalhar'" placeholder="Telefone da Medico">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Celular</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="medico.celular"
               :readonly="visualizar === 'detalhar'" placeholder="Celular da Medico">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Nacionalidade</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="medico.nacionalidade"
               :readonly="visualizar === 'detalhar'" placeholder="Nacionalidade da Medico">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Cpf</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="medico.cpf"
               :readonly="visualizar === 'detalhar'" placeholder="CPF da Medico">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Rg</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="medico.rg"
               :readonly="visualizar === 'detalhar'" placeholder="RG da Medico">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Email</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="medico.email"
               :readonly="visualizar === 'detalhar'" placeholder="Email da Medico">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Login</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="medico.login"
               :readonly="visualizar === 'detalhar'" placeholder="Login da Medico">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Senha</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="medico.senha"
               :readonly="visualizar === 'detalhar'" placeholder="Senha da Medico">
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Sexo</label>
      <div class="control">
        <input class="input is-black" type="text" v-model="medico.sexo"
               :readonly="visualizar === 'detalhar'" placeholder="Sexo da Medico">
      </div>
    </div>
  </div>

  <hr />

  <div class="columns" v-if="visualizar === 'detalhar'">
    <div class="column is-6"></div>
    <div class="column is-2">
      <router-link to="/medico/listar">
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
      <router-link to="/medico/listar">
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
      <router-link to="/medico/listar">
        <button class="button is-fullwidth is-light">Voltar</button>
      </router-link>
    </div>
    <div class="column is-3">
      <button class="button is-fullwidth is-info" @click="onClickCadastrar()">Cadastrar Medico</button>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue } from 'vue-class-component';
import { Medico } from "@/model/medico.model";
import { Prop } from "vue-property-decorator";
import { Notification } from "@/model/notification.model";
import { MedicoClient } from '@/client/medico.client';
import {EspecialidadeClient} from "@/client/especialidade.client";
import {Especialidade} from "@/model/especialidade.model";
import {PageRequest} from "@/model/page/page-request";
import {PageResponse} from "@/model/page/page-response";
import {Convenio} from "@/model/convenio.model";
import {ConvenioClient} from "@/client/convenio.client";



export default class MedicoForm extends Vue {

  public especialidadeClient !: EspecialidadeClient
  public especialidadeList: Especialidade[] = []
  public pageRequest: PageRequest = new PageRequest()
  public pageResponse: PageResponse<Especialidade> = new PageResponse()

  private medicoClient!: MedicoClient
  medico: Medico = new Medico()
  notification: Notification = new Notification()
  visualizar = 'detalhar'

  public listarEspecialidade(): void{
    this.especialidadeClient.findByFiltrosPaginado(this.pageRequest)
        .then(
            success => {
              this.pageResponse = success
              this.especialidadeList = this.pageResponse.content
            },
            error => console.log(error)
        )
  }

  @Prop({ type: Number, required: false })
  private readonly id!: number

  @Prop({ type: String, default: false })
  private readonly model!: string

  public mounted(): void {
    this.medicoClient = new MedicoClient()
    this.carregarMedico()
    this.especialidadeClient = new EspecialidadeClient()
    this.listarEspecialidade()
  }

  onClickSairModoDetalhar(): void {
    this.visualizar = 'editar'
  }

  onClickCadastrar(): void {
    this.medicoClient.cadastrar(this.medico).then(
        success => {
          this.notification = this.notification.new(true, 'notification is-success',
              'O Medico foi Cadastrado com sucesso')
          console.log(this.medico)
          this.onClickLimpar()
        }, error => {
          this.notification = this.notification.new(true, 'notification is-danger',
              'Error: ' + error)
          console.log(this.medico)
          this.onClickLimpar()
        })
  }

  private carregarMedico(): void {
    if (this.model === 'detalhar') {
      this.medicoClient.findById(this.id).then(value => {
        this.medico = value
      }).catch(reason => {
        this.notification = reason
        console.log(this.notification)
      })
    } else {
      this.visualizar = 'cadastrar'
    }
  }

  onClickEditar(): void {
    this.medicoClient.editar(this.medico).then(sucess => {
      this.notification = this.notification.new(true, 'notification is-success',
          'O Medico foi editado com sucesso')
    }, error => {
      this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
    })
  }

  onClickDesativar(): void {
    this.medicoClient.desativar(this.medico).then(sucess => {
      this.notification = this.notification.new(true, 'notification is-success',
          'O Medico foi desativado com sucesso')
    }, error => {
      this.notification = this.notification.new(true, 'notification is-danger',
          'Error: ' + error)
    })
  }

  onClickFecharNotificacao(): void {
    this.notification = new Notification()
  }
  private onClickLimpar(): void {
    this.medico = new Medico()
  }
}

</script>