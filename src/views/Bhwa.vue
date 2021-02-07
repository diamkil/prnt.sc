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
            <h1>BHWA!!!!!</h1>
            <img src="https://img.dkil.ca/bhwa.png" alt="BHWA">
        </div>
    </div>
</template>

<script>
export default {
    metaInfo() {
        return {
            meta: [
                {property: 'og:title', content: 'BHWA!!!'},
                {property: 'og:site_name', content: 'diamkil\'s Img Website'},
                {property: 'og:type', content: 'website'},
                {property: 'og:image', content: 'https://img.dkil.ca/bhwa.png'}
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
