<template>
  <div>
<!--    <div class="columns is-12">-->
<!--      <article class="titulo panel is-primary">-->
<!--        <p class="panel-heading">-->
<!--          Lista de Agendas-->
<!--        </p>-->
<!--      </article>-->
<!--    </div>-->
<!--    <div class="search-bar">-->
<!--      <input type="search" name="search-bar" placeholder="Pesquisar...">-->
<!--      <button>Buscar</button>-->
<!--      <router-link to="/cadastroagenda"><button>Cadastrar</button></router-link>-->
<!--    </div>-->

      <article class="panel is-info">
    <p class="panel-heading">
      LISTA DE AGENDAMENTOS
    </p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-info" type="text" placeholder="Search">
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
  </article>
    <div>
      <router-link to="/cadastroagenda">
        <button class="button is-responsive is-rounded is-info is-light">
          Cadastrar novo Agendamento
        </button>
      </router-link>
    </div>

    <table class="table">
      <thead>
      <tr>
        <th style="text-align: center;">ID</th>
        <th style="text-align: center;">Status</th>
        <th style="text-align: center;">Paciente</th>
        <th style="text-align: center;">Medico</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in agendaList" :key="item.id">
        <th style="text-align: center;">{{ item.id }}</th>

        <th style="text-align: center;">
          <span v-if="item.ativo" class="tag is-success"> Ativo </span>
          <span v-if="!item.ativo" class="tag is-danger"> Inativo </span>
        </th>

        <th style="text-align: center;">{{ item.paciente.nome }}</th>
        <th style="text-align: center;">{{ item.medico.nome }}</th>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'
import { Agenda } from '@/model/agenda.model'
import { AgendaClient } from '@/client/agenda.client'

export default class agendaList extends Vue {
  public pageRequest: PageRequest = new PageRequest()
  public pageResponse: PageResponse<Agenda> = new PageResponse()
  public agendaList: Agenda[] = []
  public agendaClient!: AgendaClient

  public mounted(): void {
    this.agendaClient = new AgendaClient()
    this.listarAgenda()
  }
  public listarAgenda(): void {
    this.agendaClient.findByFiltrosPaginado(this.pageRequest)
        .then(
            success => {
              this.pageResponse = success
              this.agendaList = this.pageResponse.content
            },
            error => console.log(error)
        )
  }
  public onClickPaginaDetalhar(idAgenda: number) {
    this.$router.push({ name: 'agenda-detalhar', params: { id: idAgenda, model: 'detalhar' } })
  }

}
</script>