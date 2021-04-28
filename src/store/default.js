import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import loading from "./loading";
import user from "./user";

export default () => {
    var store = new Vuex.Store({
        modules:{
            loading: loading,
            user: user
        },
        state: {
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
    })
    if (typeof window !== 'undefined' && window.__INITIAL_STAT) {
        store.state = window.__INITIAL_STAT
    }
    return store
}