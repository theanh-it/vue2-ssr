export default {
    namespaced: true,
    state(){
        return{
            public:{
                isMenuMobile: false,
                headerPage:{
                    lv:[],
                    name:""
                }
            },
            admin:{
                headerPage:{
                    lv:[],
                    name:""
                }
            }
        }
    },
    actions:{
        set_status_menu: ({commit}, status)=>{
            commit("SET_STATUS_MENU", status);
        },
        set_header_page: ({commit}, {data, layout})=>{
            commit("SET_HEADER_PAGE", {data: data, layout: layout ? layout : "public"});
        }
    },
    mutations:{
        SET_STATUS_MENU: (state, status)=>{
            state.public.isMenuMobile = status;
        },
        SET_HEADER_PAGE: (state, object)=>{
            state[object.layout].headerPage.lv = object.data.lv;
            state[object.layout].headerPage.name = object.data.name;
        }
    }
}