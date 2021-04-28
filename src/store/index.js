import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import loading  from "./loading";
import template from "./template";

export default new Vuex.Store({
    modules:{
        template:   template,
        loading:    loading
    },
    state: {
        isBrowser: false,
        token: false
    },
    getters:{
        get_token: state=>state.token
    },
    mutations: {
        SET_TOKEN: (state, token)=>{
           state.token = token;
        }
    },
    actions: {
        set_token: ({ commit },token)=>{
            commit('SET_TOKEN', token);
        }
    }
});