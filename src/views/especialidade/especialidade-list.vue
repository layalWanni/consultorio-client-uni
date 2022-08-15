<template>
  <article class="panel is-info">
    <p class="panel-heading">
      LISTA DE ESPECIALIDADES
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
    <router-link to="/especialidade/form">
      <button class="button is-responsive is-rounded is-info is-light">
        Cadastrar novo Especialidade
      </button>
    </router-link>
  </div>

  <table class="table">
    <thead>
    <tr>
      <th>ID</th>
      <th>Ativo</th>
      <th>Nome</th>
      <th>Opções</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="item in especialidadesList" :key="item.id">
      <th>{{ item.id }}</th>
      <th>
        <span v-if="item.ativo == true" class="tag is-success"> Ativo </span>
        <span v-if="!item.ativo" class="tag is-danger"> Inativo </span>
      </th>
      <th>{{ item.nome }}</th>
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
import { Especialidade } from '@/model/especialidade.model'
import { EspecialidadeClient } from '@/client/especialidade.client'
import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

export default class EspecialidadeList extends Vue {

  pageRequest: PageRequest = new PageRequest()
  pageResponse: PageResponse<Especialidade> = new PageResponse()

  especialidadesList: Especialidade[] = []
  especialidadeClient!: EspecialidadeClient

  public mounted(): void {
    this.especialidadeClient = new EspecialidadeClient()
    this.listarEspecialidades()
  }
  private listarEspecialidades(): void {
    this.especialidadeClient.findByFiltrosPaginado(this.pageRequest)
        .then(
            success => {
              this.pageResponse = success
              this.especialidadesList = this.pageResponse.content
            },
            error => console.log(error)
        )
  }
  onClickPaginaDetalhar(idEspecialidade: number) {
    this.$router.push({ name: 'especialidade-detalhar', params: { id: idEspecialidade, model: 'detalhar' } })
  }
}

</script>


<style>
.buttonCadastrar {
  margin-bottom: 20px;
}
</style>