<template>
<div class="layout-public">
    <Header/>
    <notifications group="app" id="notifications" />
    <div class="main">
        <HeaderMain v-if="$route.fullPath != '/dang-ky' && $route.fullPath != '/dang-nhap' && $route.fullPath != '/'" />
        <router-view :key="$route.fullPath"></router-view>
    </div>
    <Footer/>
</div>
</template>

<script>
import Header from "./Header.vue";
import HeaderMain from "./HeaderMain.vue";
import Footer from "./Footer.vue";

export default {
    name: "layout-public",
    components:{Header,HeaderMain,Footer}    
}
</script>

<style lang="scss">
@import "../../../../public/css/reset.css";
@import "../../../../public/scss/style.scss";
</style>