import Vue from 'vue';
import VueRouter from 'vue-router';
const Enviar = () => import('../pages/views/Enviar');
const Arquivos = () => import('../pages/views/Arquivos');

Vue.use(VueRouter);

const routes = [
    { name: 'enviar', path: '/enviar', component: Enviar },
    { name: 'arquivos', path: '/arquivos', component: Arquivos },
    { path: '', redirect: '/arquivos' }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.APP_URL,
    routes
});


export default router
