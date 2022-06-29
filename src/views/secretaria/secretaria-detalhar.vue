<template>
    <div class="secretaria">

        <article class="panel is-info">
            <p class="panel-heading">
                DETALHAMENTO DA SECRETÁRIA
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
                Cadastrar nova Secretária
            </button>

        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>PIS</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>1</th>
                    <td>Layal Al Wanni</td>
                    <td>013.956.229-06</td>
                    <td><button class="button is-responsive is-rounded is-info is-light">Detalhar</button></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>Paulo Khensane</td>
                    <td>011.345.346-65</td>
                    <td><button class="button is-responsive is-rounded is-info is-light">Detalhar</button></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>Pedro Costa</td>
                    <td>067.553.039-33</td>
                    <td><button class="button is-responsive is-rounded is-info is-light">Detalhar</button></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td>Vinicius Frasson</td>
                    <td>123.087.734-44</td>
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