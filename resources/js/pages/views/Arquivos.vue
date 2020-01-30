<template>
    <div>
        <div class="row-cols-1">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Arquivos para download</h1>
                    <p class="lead">Segue a lista de arquivos para conferência.</p>
                </div>
            </div>
        </div>
        <div class="justify-content-center d-flex">
            <table class="table w-75 table-hover">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome do Arquivo</th>
                    <th scope="col">Data de envio</th>
                    <th scope="col">Ações</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="arquivo in orderarquivos">
                    <th scope="row">{{ arquivo.id }}</th>
                    <td>{{ arquivo.name }}</td>
                    <td>{{ arquivo.created_at | formatDate }}</td>
                    <td><a :href="'storage/arquivos/'+ arquivo.path" download="Resultado" class="btn btn-success"><i class="fas fa-file-download"></i> Baixar</a></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        name: 'arquivos',
        data(){
            return{
                arquivos: []
            }
        },
        computed: {
            orderarquivos: function () {
                return _.orderBy(this.arquivos, 'created_at', ['desc'])
            }
        },
        async mounted() {
            await axios.get('/api/index')
                .then( res => {
                    this.arquivos = res.data;
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
</script>
