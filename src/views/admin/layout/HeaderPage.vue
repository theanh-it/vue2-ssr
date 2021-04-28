<template>
<section class="content-header">
    <h1>
        {{ data.name }}
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li v-for="(item, index) in data.lv" :key="index"><a href="#">{{ item }}</a></li>
    </ol>
</section>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState({
            data: state=>state.template.admin.headerPage
        })
    }
}
</script>
