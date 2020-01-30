require('./bootstrap');
import Vue from 'vue';
import router from './router'
import moment from 'moment'

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
    }
});

const app = new Vue({
    el: '#app',
    router
});
