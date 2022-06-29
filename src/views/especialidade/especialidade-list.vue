<template>
    <div class="especialidade">

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
            <button class="button is-responsive is-rounded is-info is-light">
                Cadastrar nova Especialidade
            </button>

        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>1</th>
                    <td>Radiologista</td>
                    <td><button class="button is-responsive is-rounded is-info is-light">Detalhar</button></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>Neurocirurgião</td>
                    <td><button class="button is-responsive is-rounded is-info is-light">Detalhar</button></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>Clinico Geral</td>
                     <td><button class="button is-responsive is-rounded is-info is-light">Detalhar</button></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td>Fisioterapeuta</td>
                    <td><button class="button is-responsive is-rounded is-info is-light">Detalhar</button></td>
                </tr>
            </tbody>

        </table>

    </div>



</template>

<style>
.buttonCadastrar {
    margin-bottom: 20px;
}
</style>