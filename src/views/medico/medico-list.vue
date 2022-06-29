<template>
    <div class="medico">

        <article class="panel is-info">
            <p class="panel-heading">
                LISTA DE MEDICOS
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
                Cadastrar novo Medico
            </button>

        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Especialidade</th>
                    <th>Consultorio</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>1</th>
                    <td>Layal Al Wanni</td>
                    <td>Radiologista</td>
                    <td>CON-01</td>
                    <td><button class="button is-responsive is-rounded is-info is-light">Detalhar</button></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>Paulo Khensane</td>
                    <td>Clinico Geral</td>
                    <td>CON-02</td>
                    <td><button class="button is-responsive is-rounded is-info is-light">Detalhar</button></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>Pedro Costa</td>
                    <td>Neurocirurgião</td>
                    <td>CON-03</td>
                    <td><button class="button is-responsive is-rounded is-info is-light">Detalhar</button></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td>Vinicius Frasson</td>
                    <td>Fisioterapia</td>
                    <td>CON-04</td>
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