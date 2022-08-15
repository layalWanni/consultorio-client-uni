<template class="cadastroagenda">
  <div>

    <div style="display: inline">
      <div class="columns is-12">
<!--        <article class="titulo panel is-primary">-->
          <p class="panel-heading">
            Cadastro de Agendamentos
          </p>
<!--        </article>-->
      </div>

      <div class="columns" v-if="notification.ativo">
        <div class="column is-12">
          <div :class="notification.classe">
            <button @click="onClickFecharNotificacao()" class="delete"></button>
            {{ notification.mensagem }}
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12 is-size-3" v-if="model !== 'agenda-paciente'">
        <label class="label">
          <input v-model="agenda.ativo" checked type="checkbox" :disabled="model === 'detalhar'">
          Ativar agenda
        </label>
        <label class="label">
          <input v-model="agenda.encaixe" checked type="checkbox" :disabled="model === 'detalhar'">
          Encaixe
        </label>
      </div>
    </div>

    <div class="columns is-12">
      <div class="field column is-3">
        <label class="label">
          <p>Paciente:</p>
        </label>
        <div class="select is-info">
          <select id="paciente" v-model="agenda.paciente.id">
            <option value="" disabled selected>Lista de pacientes</option>
            <option v-for="item in pacienteList" v-bind:key="item.id" v-bind:value="item.id">{{
                item.nome
              }}</option>
          </select>
        </div>
      </div>
      <div class="field column is-3">
        <label class="label">
          <p>Secretaria:</p>
        </label>
        <div class="select is-info">
          <select id="secretaria" v-model="agenda.secretaria.id">
            <option value="" disabled selected>Lista de secretarias</option>
            <option v-for="item in secretariaList" v-bind:key="item.id" v-bind:value="item.id">{{
                item.nome
              }}</option>
          </select>
        </div>
      </div>
      <div class="field column is-3">
        <label class="label">
          <p>Medico:</p>
        </label>
        <div class="select is-info">
          <select id="medico" v-model="agenda.medico.id">
            <option value="" disabled selected>Lista de medicos</option>
            <option v-for="item in medicoList" v-bind:key="item.id" v-bind:value="item.id">{{
                item.nome
              }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="columns is-12">
      <div class="field column is-3">
        <label class="label">
          <p>Data/De: </p>
        </label>
        <input class="input is-link" type="datetime-local" v-model="agenda.dataDe" placeholder=""
               :disabled="model === 'detalhar'">
      </div>
      <div class="field column is-3">
        <label class="label">
          <p>Data/Ate: </p>
        </label>
        <input class="input is-link" type="datetime-local" v-model="agenda.dataAte" placeholder=""
               :disabled="model === 'detalhar'">
      </div>
      <div class="field column is-3">
        <label class="label">
          <p>Status: </p>
        </label>
        <div class="select is-info">
          <select class="" id="status" v-model="agenda.status" placeholder="Selecionar">
            <option value="pendente">Pendente</option>
            <option value="aprovado">Aprovado</option>
            <option value="rejeitado">Rejeitado</option>
            <option value="cancelado">Cancelado</option>
            <option value="compareceu">Compareceu</option>
            <option value="naoCompareceu">Não compareceu</option>
          </select>
        </div>
      </div>
    </div>

    <div class="margembutton">
      <div class="linha4 column" style="display:flex; margin-top:10px;">
        <div class="opcoes column" v-if="model != 'detalhar' && model != 'editar'">
          <a href="/agenda-list" class="button is-link">Voltar</a>
          <button class="button is-primary" @click="onClickCadastrar()">Salvar</button>
        </div>
        <div class="opcoes column" v-if="model === 'detalhar'">
          <a href="/agenda-list" class="button is-link">Voltar</a>
          <button class="button is-warning" @click="onClickPaginaEditar(agenda.id)">Editar</button>
          <button class="button is-danger" @click="onClickDeletar">Excluir</button>
        </div>
        <div class="opcoes column" v-if="model === 'editar'">
          <a href="/agenda-list" class="button is-link">Voltar</a>
          <button class="button is-primary" @click="onClickSalvarAlteracao()">Salvar Alterações</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'
import { Agenda } from '@/model/agenda.model'
import { Medico } from '@/model/medico.model'
import { Secretaria } from '@/model/secretaria.model'
import { Paciente } from '@/model/paciente.model'
import { Notification } from '@/model/notification.model'
import { AgendaClient } from '@/client/agenda.client'
import { MedicoClient } from '@/client/medico.client'
import { SecretariaClient } from '@/client/secretaria.client'
import { PacienteClient } from '@/client/paciente.client'


export default class agendaForm extends Vue {

  public medicoList: Medico[] = []
  public secretariaList: Secretaria[] = []
  public pacienteList: Paciente[] = []
  public agendaClient!: AgendaClient
  public medicoClient!: MedicoClient
  public secretariaClient!: SecretariaClient
  public pacienteClient!: PacienteClient
  public agenda: Agenda = new Agenda()
  public medico: Medico = new Medico()
  public secretaria: Secretaria = new Secretaria()
  public paciente: Paciente = new Paciente()
  public notification: Notification = new Notification()
  public pageRequest: PageRequest = new PageRequest()
  public pageResponse: PageResponse<Medico> = new PageResponse()
  public pageResponse2: PageResponse<Paciente> = new PageResponse()
  public pageResponse3: PageResponse<Secretaria> = new PageResponse()

  @Prop({ type: Number, required: false })
  private readonly id!: number

  @Prop({ type: String, default: false })
  readonly model!: string

  public listarMedico(): void {
    this.medicoClient.findByFiltrosPaginado(this.pageRequest)
        .then(
            success => {
              this.pageResponse = success
              this.medicoList = this.pageResponse.content
            },
            error => console.log(error)
        )
  }
  public listarPaciente(): void {
    this.pacienteClient.findByFiltrosPaginado(this.pageRequest)
        .then(
            success => {
              this.pageResponse2 = success
              this.pacienteList = this.pageResponse2.content
            },
            error => console.log(error)
        )
  }
  public listarSecretaria(): void {
    this.secretariaClient.findByFiltrosPaginado(this.pageRequest)
        .then(
            success => {
              this.pageResponse3 = success
              this.secretariaList = this.pageResponse3.content
            },
            error => console.log(error)
        )
  }

  public mounted(): void {
    this.agendaClient = new AgendaClient()
    this.carregaragenda()
    this.medicoClient = new MedicoClient()
    this.listarMedico()
    this.pacienteClient = new PacienteClient()
    this.listarPaciente()
    this.secretariaClient = new SecretariaClient()
    this.listarSecretaria()

    console.log(this.id)
    console.log(this.model)
  }

  public onClickCadastrar(): void {

    this.agendaClient.cadastrar(this.agenda)
        .then(
            success => {
              this.notification = this.notification.new(true, 'notification is-success', 'agenda cadastrado com sucesso!')
              this.onClickLimpar()
            }, error => {
              this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)

            })
  }

  public onClickDeletar(): void {
    this.agendaClient.desativar(this.agenda).then(sucess => {
      this.notification = this.notification.new(true, 'notification is-success', 'agenda foi Desativado com sucesso!')
    }, error => {
      this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
    })
  }

  public onClickPaginaEditar(idAgenda: number) {
    this.$router.push({ name: 'agenda-editar', params: { id: idAgenda, model: 'editar' } })
    console.log("ta chamando")
  }

  public onClickPaginaPaciente(idAgenda: number) {
    this.$router.push({ name: 'agenda-paciente', params: { id: idAgenda, model: 'pagina' } })
  }


  public onClickSalvarAlteracao(): void {
    this.agendaClient.editar(this.agenda).then(success => {
      this.notification = this.notification.new(true, 'notification is-success', 'agenda foi Editado com sucesso!')
    }, error => {
      this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
    })
  }
  public carregaragenda(): void {
    this.agendaClient.findById(this.id).then(value => {
      this.agenda = value
      console.log("agenda" + value)
    }).catch(error => {
      console.log(error)
    })

  }

  public onClickFecharNotificacao(): void {
    this.notification = new Notification()
  }

  public onClickLimpar(): void {
    this.agenda = new Agenda()
  }

}
</script>