<template>
<div class="header-article">
    <div class="container">
       <div class="tree">
            <ul>
                <li><a href="#">Trang chủ</a></li>
                <li v-for="(item, index) in data.lv" :key="index"><a href="#">{{ item }}</a></li>
            </ul>
       </div>
        <h2>{{ data.name }}</h2>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState({
            data: state=>state.template.public.headerPage
        })
    }
}
</script>

<style lang="scss" scoped>

</style>