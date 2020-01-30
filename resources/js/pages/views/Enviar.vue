<template>
    <div>
        <div class="justify-content-center align-content-center d-flex">
            <div class="card mt-4 w-50">
                <div class="card-header">
                    Envio de arquivo
                </div>
                <div class="card-body">
                    <form @submit.prevent="send">
                        <div class="form-group">
                            <label>Clique no botão abaixo para selecionar o arquivo</label>
                            <input type="file" id='onfile' @change="loadfile" :accept="accepted" class="form-control-file" >
                        </div>
                        <button type="submit" class="btn btn-dark">Enviar</button>
                    </form>
                    <div v-if="success" class="alert alert-success mt-3" role="alert">
                       Arquivo enviado com sucesso!
                        <button type="button" class="close" data-dismiss="alert" aria-label="Fechar">
                            <span @click="success = false">&times;</span>
                        </button>
                    </div>
                    <div v-if="error" class="alert alert-danger mt-3" role="alert">
                        Erro ao enviar o arquivo!
                        <button type="button" class="close" data-dismiss="alert" aria-label="fechar">
                            <span @click="error = false">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="justify-content-center d-flex mt-5">
            <table class="table w-50 table-hover">
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
                    <td><button class="btn btn-danger" @click="deletar({ arquivo })"><i class="fas fa-trash-alt"></i> Deletar</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

    import axios from 'axios'

    export default {
        name: 'enviar',
        props: {
            accepted: {
                default: undefined
            },
            default: {
                default: undefined
            },
        },
        data() {
            return{
                file: undefined,
                arquivos: [],
                success: false,
                error: false
            }
        },
        computed: {
            orderarquivos: function () {
                return _.orderBy(this.arquivos, 'created_at', ['desc'])
            }
        },
        methods: {
            loadfile: function (event) {
                let input = event.target;
                if (input.files && input.files[0]) {
                    this.file = input.files[0];
                }
            },
            send() {
                let data = new FormData();
                data.append('onfile', this.file);
                axios.post('/api/store', data, {
                    headers: {'Content-type': 'multipart/form-data'}
                }).then(() => {
                    this.success = true
                    this.load()
                }).catch(e => {
                    console.log(e)
                    this.error = true
                })
            },
            deletar(arquivo) {
                axios.delete('/api/delete/'+ arquivo.arquivo.id )
                this.load()
            },
            async load() {
                await axios.get('/api/index')
                    .then( res => {
                        this.arquivos = res.data;
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        },
        mounted() {
            this.load()
        }
    }
</script>
