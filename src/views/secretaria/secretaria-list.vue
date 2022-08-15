<template>
  <article class="panel is-info">
    <p class="panel-heading">
      LISTA DE SECRETARIAS
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
    <router-link to="/secretaria/form">
      <button class="button is-responsive is-rounded is-info is-light">
        Cadastrar nova Secretaria
      </button>
    </router-link>
  </div>

  <table class="table">
    <thead>
    <tr>
      <th>ID</th>
      <th>Ativo</th>
      <th>Nome</th>
      <th>Pis</th>
      <th>Opções</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="item in secretariasList" :key="item.id">
      <th>{{ item.id }}</th>
      <th>
        <span v-if="item.ativo == true" class="tag is-success"> Ativo </span>
        <span v-if="!item.ativo" class="tag is-danger"> Inativo </span>
      </th>
      <th>{{ item.nome }}</th>
      <th>{{ item.pis }}</th>
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
import { Secretaria } from '@/model/secretaria.model'
import { SecretariaClient } from '@/client/secretaria.client'
import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

export default class SecretariaList extends Vue {

  pageRequest: PageRequest = new PageRequest()
  pageResponse: PageResponse<Secretaria> = new PageResponse()

  secretariasList: Secretaria[] = []
  secretariaClient!: SecretariaClient

  public mounted(): void {
    this.secretariaClient = new SecretariaClient()
    this.listarSecretarias()
  }
  private listarSecretarias(): void {
    this.secretariaClient.findByFiltrosPaginado(this.pageRequest)
        .then(
            success => {
              this.pageResponse = success
              this.secretariasList = this.pageResponse.content
            },
            error => console.log(error)
        )
  }
  onClickPaginaDetalhar(idSecretaria: number) {
    this.$router.push({ name: 'secretaria-detalhar', params: { id: idSecretaria, model: 'detalhar' } })
  }
}

</script>


<style>
.buttonCadastrar {
  margin-bottom: 20px;
}
</style>