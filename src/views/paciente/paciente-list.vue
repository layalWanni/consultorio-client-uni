<template>
  <article class="panel is-info">
    <p class="panel-heading">
      LISTA DE PACIENTES
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

  <div class="buttonCadastrar">
    <router-link to="/paciente/form">
      <button class="button is-responsive is-rounded is-info is-light">
        Cadastrar novo Paciente
      </button>
    </router-link>
  </div>

  <table class="table">
    <thead>
    <tr>
      <th>ID</th>
      <th>Ativo</th>
      <th>Nome</th>
      <th>Convenio</th>
      <th>Opções</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="item in pacientesList" :key="item.id">
      <th>{{ item.id }}</th>
      <th>
        <span v-if="item.ativo == true" class="tag is-success"> Ativo </span>
        <span v-if="!item.ativo" class="tag is-danger"> Inativo </span>
      </th>
      <th>{{ item.nome }}</th>
      <th>{{ item.convenio.nome }}</th>
      <th>
        <button @click="onClickPaginaDetalhar(item.id)" class="button is-small is-info is-outlined">
          Detalhar
        </button>
      </th>
    </tr>
    </tbody>

  </table>

</template>

<script lang="ts">

import { Vue } from 'vue-class-component'
import { Paciente } from '@/model/paciente.model'
import { PacienteClient } from '@/client/paciente.client'
import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

export default class PacienteList extends Vue {

  pageRequest: PageRequest = new PageRequest()
  pageResponse: PageResponse<Paciente> = new PageResponse()

  pacientesList: Paciente[] = []
  pacienteClient!: PacienteClient

  public mounted(): void {
    this.pacienteClient = new PacienteClient()
    this.listarPacientes()
  }
  private listarPacientes(): void {
    this.pacienteClient.findByFiltrosPaginado(this.pageRequest)
        .then(
            success => {
              this.pageResponse = success
              this.pacientesList = this.pageResponse.content
            },
            error => console.log(error)
        )
  }
  onClickPaginaDetalhar(idPaciente: number) {
    this.$router.push({ name: 'paciente-detalhar', params: { id: idPaciente, model: 'detalhar' } })
  }
}

</script>


<style>
.buttonCadastrar {
  margin-bottom: 20px;
}
</style>