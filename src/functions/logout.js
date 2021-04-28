import store from "../store";
//const store = createStore();
export default (router=null, api=null)=>{
    store.dispatch("user/set_data", {id_user:null});
    store.dispatch("set_token", "");
    localStorage.token = "";
    router ? router.push({name: "home"}) : "";
    api ? api.get("/auth/logout") : "";
}