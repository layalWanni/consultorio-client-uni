<template>
    <div class="paciente">

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
            <button class="button is-responsive is-rounded is-info is-light">
                Cadastrar novo Paciente
            </button>

        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Tipo de Atendimento</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>1</th>
                    <td>Layal Al Wanni</td>
                    <td>Convênio</td>
                    <td><button class="button is-responsive is-rounded is-info is-light">Detalhar</button></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>Paulo Khensane</td>
                    <td>Particular</td>
                    <td><button class="button is-responsive is-rounded is-info is-light">Detalhar</button></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>Pedro Costa</td>
                    <td>Particular</td>
                    <td><button class="button is-responsive is-rounded is-info is-light">Detalhar</button></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td>Vinicius Frasson</td>
                    <td>Convênio</td>
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