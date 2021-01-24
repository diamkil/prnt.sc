<template>
    <div>
        <h1>
            <span class="float-right">
                Date: {{ fileName(file.fileName) +', ' + file.fileDay +' ' + getMonthName(file.fileMonth) + ' ' + file.fileYear }}
            </span>
            <router-link class="float-left" to="/" style="text-decoration: none; color: #303030;">
                <img 
                src="https://img.dkil.ca/diamkil.gif"
                alt="Animated Diamkil"
                id="diamkil-img"
                >Diamkil's Img Share
            </router-link>
        </h1>
        <a :href="file.fileLocation" target="_blank">
            <b-img fluid-grow :src="file.fileLocation"/>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            file: {
                fileName: this.$route.params.time,
                fileLocation: [ 'https://img.dkil.ca/' + this.$route.params.year + '/' + this.$route.params.month + '/' + this.$route.params.day + '/' + this.$route.params.time ],
                fileYear: this.$route.params.year,
                fileMonth: this.$route.params.month,
                fileDay: this.$route.params.day
            },
            months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
        }
    },
    methods: {
        getMonthName(fileMonth) {
            const month = fileMonth-1
            const monthName = this.months[month]
            return monthName
        },
        fileName(fileName) {
            const fileHour = fileName.substr(0, 2)
            const fileMinute = fileName.substr(2, 2)
            const fileSecond = fileName.substr(4, 2)

            const finalName = fileHour + ':' + fileMinute + ':' + fileSecond
            return finalName
        }
    },
    metaInfo() {
        return {
            meta: [
                {property: 'og:title', content: `${this.fileName(this.file.fileName)}`},
                {property: 'og:site_name', content: 'diamkil\'s Img Website'},
                {property: 'og:type', content: 'website'},
                {property: 'og:image', content: this.file.fileLocation},
                {property: 'og:image:secure_url', content: this.file.fileLocation},
                {property: 'og:image:width', content: '1280'},
                {property: 'og:image:height', content: '720'}
            ]
        }
    }
}
</script>
<style>
    #diamkil-img {
        height: 50px;
    }
</style>
