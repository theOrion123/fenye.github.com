import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
Vue.prototype.$http=axios;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/page/:pagenum'
        },
        {
            path:'/',
            redirect:'/page/1'
        }
    ]
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
