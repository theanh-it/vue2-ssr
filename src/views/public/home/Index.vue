<template>
<div id="home">
    <div class="container">
        main home >>> <router-link to="/admin">xem admin</router-link>
    </div>
</div>
</template>

<script>
export default {
    metaInfo(){
        return {
            title: "",
            meta:[
                {name: "keywords", content: ""},
                {name: "title", content: ""},
                {name: 'description', content: '' },
                {name: "og:site_name", content: ""},
                {name: "og:title", content: ""},
                {name: "og:description", content: ''},
                {name: "og:image", content: this.$domain_frontend+"/public/img/article.jpg"}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>