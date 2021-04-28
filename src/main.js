import Vue from 'vue'
import App from './App.vue'
import {sync} from "vuex-router-sync"
import createRouter from './router'
import createStore from './store'

import Notifications from 'vue-notification/dist/ssr.js'
Vue.use(Notifications);

import $alert from "./functions/alert";
Vue.prototype.$alert = $alert;

import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: '/public/img/loading.gif',
    attempt: 1,
    //listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
});

import $number_format from "./functions/number_format";
Vue.prototype.$number_format = $number_format;

import $logout from "./functions/logout";
Vue.prototype.$logout = $logout;

import moment from "moment";
moment.locale("vi");
Vue.prototype.$moment = moment;

import veeValidate from "vee-validate";
Vue.use(veeValidate);

import axios from "axios";
import config from './config.json';
var http = axios.create({
    baseURL: config.api,
    headers:{
        Authorization: `Bearer null`
    }
});
Vue.prototype.$api = http;
Vue.prototype.$domain_api = config.api;
Vue.prototype.$domain_frontend = config.domain_frontend;

export default () => {
    const router = createRouter();
    const store = createStore;
    sync(store, router);
    const app = new Vue({
        router,
        store,
        render: h => {
            return h(App)
        }
    })
    return { app, router, store }
}