export default {
    namespaced: true,
    state: () => ({
        status: false,
    }),
    //update data
    mutations: {
        
    },

    getters: {
        doubleCount(state) {
            return state.count * 2
        },
        updateStatus: state=>(status)=>{
            state.status=status;
        }
    }
}