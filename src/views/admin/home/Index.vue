<template>
    <div>
        home
    </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
    data(){
        return {
            header:{
                lv: ["dashboard"],
                name:"Hệ thống quản trị"
            }
        }
    },
    methods:{
        ...mapActions("template", ["set_header_page"])
    },
    mounted(){
        this.set_header_page({data: this.header, layout: "admin"});
    }
}
</script>

<style lang="scss" scoped>

</style>