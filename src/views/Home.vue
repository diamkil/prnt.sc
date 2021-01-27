<template>
    <div>
        <h1>
            <router-link class="float-left" to="/" style="text-decoration: none; color: #303030;">
                <img 
                :src=this.config.logoUrl
                :alt=this.config.logoAlt
                id="logo">
                <span class="white-text">{{ this.config.logoTitle }}</span>
            </router-link>
        </h1>
        <br><br><br><br><br><br>
        <div class="white-text">
            <h1>FR</h1>
            <h2>Le serveur d'images de diamkil!!</h2>
            <p>
                Les images sont envoyées à partir de ShareX sur un serveur NAS et sont affichées ici sur le site Web.<br>
                Le Site web a été crée de A à Z par diamkil avec <a href="https://vuejs.org/">Vue.JS</a>, <a href="https://router.vuejs.org/">Vue-Router</a>, <a href="https://vue-meta.nuxtjs.org/">Vue-Meta</a>, <a href="https://github.com/Akryum/vue-cli-plugin-ssr">Vue Server Renderer</a> et <a href="https://bootstrap-vue.org/">Bootstrap-Vue</a>
            </p>
            <br><br><br>
            <h1>EN</h1>
            <h2>diamkil's Image Server!!</h2>
            <p>
                The images are sent with SharexX on a NAS server and are shown here on the website.<br>
                The website was create from A to Z by diamkil using <a href="https://vuejs.org/">Vue.JS</a>, <a href="https://router.vuejs.org/">Vue-Router</a>, <a href="https://vue-meta.nuxtjs.org/">Vue-Meta</a>, <a href="https://github.com/Akryum/vue-cli-plugin-ssr">Vue Server Renderer</a> and <a href="https://bootstrap-vue.org/">Bootstrap-Vue</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    metaInfo() {
        return {
            meta: [
                {property: 'og:title', content: 'Home'},
                {property: 'og:site_name', content: 'diamkil\'s Img Website'},
                {property: 'og:type', content: 'website'}
            ],
            title: this.config.pageTitle
        }
    }
}
</script>

<style>
    #logo {
        height: 50px;
    }
    .white-text {
        color: white;
    }
</style>
