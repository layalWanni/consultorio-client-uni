<template>
  <article class="panel is-info">
    <p class="panel-heading">
      LISTA DE CONVÊNIOS
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
    <router-link to="/convenio/form">
      <button class="button is-responsive is-rounded is-info is-light">
        Cadastrar novo Convênio
      </button>
    </router-link>
  </div>

  <table class="table">
    <thead>
    <tr>
      <th>ID</th>
      <th>Ativo</th>
      <th>Nome</th>
      <th>Valor</th>
      <th>Opções</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="item in conveniosList" :key="item.id">
      <th>{{ item.id }}</th>
      <th>
        <span v-if="item.ativo == true" class="tag is-success"> Ativo </span>
        <span v-if="!item.ativo" class="tag is-danger"> Inativo </span>
      </th>
      <th>{{ item.nome }}</th>
      <th>{{ item.valor }}</th>
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
import { Convenio } from '@/model/convenio.model'
import { ConvenioClient } from '@/client/convenio.client'
import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

export default class ConvenioList extends Vue {

  pageRequest: PageRequest = new PageRequest()
  pageResponse: PageResponse<Convenio> = new PageResponse()

  conveniosList: Convenio[] = []
  convenioClient!: ConvenioClient

  public mounted(): void {
    this.convenioClient = new ConvenioClient()
    this.listarConvenios()
  }
  private listarConvenios(): void {
    this.convenioClient.findByFiltrosPaginado(this.pageRequest)
        .then(
            success => {
              this.pageResponse = success
              this.conveniosList = this.pageResponse.content
            },
            error => console.log(error)
        )
  }
  onClickPaginaDetalhar(idConvenio: number) {
    this.$router.push({ name: 'convenio-detalhar', params: { id: idConvenio, model: 'detalhar' } })
  }
}

</script>


<style>
.buttonCadastrar {
  margin-bottom: 20px;
}
</style>