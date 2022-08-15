<template>
  <article class="panel is-info">
    <p class="panel-heading">
      LISTA DE MEDICO
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
    <router-link to="/medico/form">
      <button class="button is-responsive is-rounded is-info is-light">
        Cadastrar novo Medico
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
    <tr v-for="item in medicosList" :key="item.id">
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
import { Medico } from '@/model/medico.model'
import { MedicoClient } from '@/client/medico.client'
import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

export default class MedicoList extends Vue {

  pageRequest: PageRequest = new PageRequest()
  pageResponse: PageResponse<Medico> = new PageResponse()

  medicosList: Medico[] = []
  medicoClient!: MedicoClient

  public mounted(): void {
    this.medicoClient = new MedicoClient()
    this.listarMedicos()
  }
  private listarMedicos(): void {
    this.medicoClient.findByFiltrosPaginado(this.pageRequest)
        .then(
            success => {
              this.pageResponse = success
              this.medicosList = this.pageResponse.content
            },
            error => console.log(error)
        )
  }
  onClickPaginaDetalhar(idMedico: number) {
    this.$router.push({ name: 'medico-detalhar', params: { id: idMedico, model: 'detalhar' } })
  }
}

</script>


<style>
.buttonCadastrar {
  margin-bottom: 20px;
}
</style>