<template>
<div id="root">
    <router-view></router-view>
</div>
</template>

<script>
import {mapActions,mapState} from "vuex";

export default {
    methods:{
        ...mapActions(["set_token"])
    },
    computed:{
        ...mapState({
            user: state=>state.user
        })
    },
    mounted(){
        if(process.browser){
            this.$store.state.isBrowser = true;
            this.set_token(localStorage.token);
            this.$api.defaults.headers.Authorization = `Bearer ${localStorage.token}`;
        }
    }
};
</script>

<style lang="scss">
@import '../public/fontawesome/css/fontawesome.min.css';
#notifications {
    width: auto !important;
    top: 5px !important;
    position: fixed;
    z-index: 1080;
    .notification-title{
        font-size: 14px;
        font-family: dragonFont,'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
        font-weight: 600;
    }
}
.vue-notification {
    padding: 10px;
    margin: 0 5px 5px;

    font-size: 12px;

    color: #ffffff;
    background: #44a4fc;
    border-left: 5px solid #187fe7;

    &.warn {
        background: #ffb648;
        border-left-color: #f48a06;
    }

    &.error {
        background: #e54d42;
        border-left-color: #b82e24;
    }

    &.success {
        background: #68cd86;
        border-left-color: #42a85f;
    }
}

.alert-box{
    position: fixed;
    z-index: 9999999;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #99999994;
    animation: show-alert 0.4s forwards;
    padding: 15px;
}
.alert-box.alert-hidden{
    animation: hidden-alert 0.4s forwards;
}
@keyframes show-alert{
    from{
        opacity: 0;
        transform: scale(1.5);
    }
    to{
        opacity: 1;
        transform: scale(1);
    }
}
@keyframes hidden-alert{
    from{
        opacity: 1;
        transform: scale(1);
    }
    to{
        opacity: 0;
        transform: scale(1.5);
    }
}
.alert-box {
    .alert{
        max-width: 400px;
        width: 100%;
        background: white;
    }
    .alert {
        .alert-header{
            display: flex;
        }
        .alert-header{
            .title{
                margin: 0px;
                font-size: 20px;
                font-weight: 600;
                flex-grow: 1;
            }
        }
        .main{
            padding: 10px 0px;
        }
        .bottom{
            display: flex;
            justify-content: flex-end;
            button{
                min-width: 60px;
                border-radius: 3px;
                border: none;
                padding: 5px 0px;
            }
            button.btn-success{
                margin-right: 10px;
            }
            button.btn-success{
                margin-right: 10px;
            }
        }
    }
}
.error-form{
    color: red;
}
</style>