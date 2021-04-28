<template>
    <div class="wrapper" id="admin">
        <notifications group="app" id="notifications" />
        <div v-if="isLoading" class="loader-wrapper" id="preloader">
            <div class="loader"></div>
        </div>
        <Header/>
        <Leftbar />
        <div class="content-wrapper">
            <HeaderPage/>
            <section class="content">
                <transition name="fade-down" mode="out-in" appear>
                    <router-view></router-view>
                </transition>
            </section>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "./Header.vue";
import HeaderPage from "./HeaderPage.vue";
import Leftbar from "./Leftbar.vue";
import Footer from "./Footer.vue";

export default {
    data(){
        return {
            isLoading: true
        }
    },
    components:{Header,HeaderPage,Leftbar,Footer},
    mounted(){
        var ls = document.createElement('link');
        ls.rel="stylesheet";
        ls.href="/public/bootstrap/dist/css/bootstrap.min.css";
        document.querySelector('#admin').appendChild(ls);

        var ls = document.createElement('link');
        ls.rel="stylesheet";
        ls.href="/public/css/core.css";
        document.querySelector('#admin').appendChild(ls);

        document.querySelector("body").classList.add("hold-transition");
        document.querySelector("body").classList.add("skin-blue");
        document.querySelector("body").classList.add("sidebar-min");
        setTimeout(()=>{this.isLoading = false;},500)
        
    },
    destroyed(){
        document.querySelector("body").classList.remove("hold-transition");
        document.querySelector("body").classList.remove("skin-blue");
        document.querySelector("body").classList.remove("sidebar-min");
    }
}
</script>
<style>
@import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic';
#preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    background-color: #a2a2a269;
}

#preloader .loader {
    position: relative;
    left: 50%;
    top: 50%;
    height: 100px;
    width: 100px;
    margin: -50px 0 0 -50px;
    border: 3px solid transparent;
    border-top-color: #3498db;
    border-bottom-color: #3498db;
    border-radius: 50%;
    z-index: 2;
    -webkit-animation: spin 2s linear infinite;
    -moz-animation: spin 2s linear infinite;
    -o-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite
}

#preloader .loader:after,
#preloader .loader:before {
    content: "";
    position: absolute;
    z-index: 2
}

#preloader .loader:before {
    top: 2%;
    bottom: 2%;
    left: 2%;
    right: 2%;
    border: 3px solid transparent;
    border-top-color: #db213a;
    border-radius: 50%;
    -webkit-animation: spin 3s linear infinite;
    -moz-animation: spin 3s linear infinite;
    -o-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite
}

#preloader .loader:after {
    top: 5%;
    bottom: 5%;
    left: 5%;
    right: 5%;
    border: 3px solid transparent;
    border-top-color: #dec52d;
    border-radius: 50%;
    -webkit-animation: spin 1.5s linear infinite;
    -moz-animation: spin 1.5s linear infinite;
    -o-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        transform: rotate(0)
    }
    50% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(180deg)
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@-moz-keyframes spin {
    0% {
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        transform: rotate(0)
    }
    50% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(180deg)
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@-o-keyframes spin {
    0% {
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        transform: rotate(0)
    }
    50% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(180deg)
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@keyframes spin {
    0% {
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        transform: rotate(0)
    }
    50% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(180deg)
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}
</style>
<style lang="scss" scoped>
#notifications {
    .notification-title{
        font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
    }
}
@keyframes fadeInDown {
    from {
        opacity: 0.2;
        transform: scaleX(0.99);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes fadeOutUp {
    from {
        opacity: 1;
    }
    to {
        opacity: 0.05;
    }
}

.fade-down-enter-active {
    animation-name: fadeInDown;
    animation-duration: 0.5s;
}

.fade-down-leave-active {
    animation-name: fadeOutUp;
    animation-duration: 0.5s;
}
.content-wrapper{
    height: calc(100vh - 96px);
    overflow-y: scroll;
    background: #ecf0f5;
}
@media(max-width: 767px){
    .content-wrapper{
        height: calc(100vh - 146px);
        width: 100%;
    }
}
</style>