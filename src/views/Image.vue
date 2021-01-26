<template>
    <div>
        <h1>
            <span class="float-right white-text">
                {{ fileTime(file.fileName) +', ' + file.fileDay +' ' + getMonthName(file.fileMonth) + ' ' + file.fileYear }}
            </span>
            <router-link class="float-left" to="/" style="text-decoration: none; color: #303030;">
                <img 
                src="https://img.dkil.ca/diamkil.gif"
                alt="Animated Diamkil"
                id="logo">
                <span class="white-text">Diamkil's Img Share</span>
            </router-link>
        </h1>
        <div v-html="viewTag(file)"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            file: {
                fileName: this.$route.params.time,
                fileLocation: 'https://img.dkil.ca/' + this.$route.params.year + '/' + this.$route.params.month + '/' + this.$route.params.day + '/' + this.$route.params.time,
                fileYear: this.$route.params.year,
                fileMonth: this.$route.params.month,
                fileDay: this.$route.params.day
            },
            months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        }
    },
    methods: {
        getMonthName(fileMonth) {
            const month = fileMonth-1
            const monthName = this.months[month]
            return monthName
        },
        fileTime(fileName) {
            const fileHour = fileName.substr(0, 2)
            const fileMinute = fileName.substr(2, 2)
            const fileSecond = fileName.substr(4, 2)

            const finalName = fileHour + ':' + fileMinute + ':' + fileSecond
            return finalName
        },
        fileDate(file) {
            const finalName = file.fileDay + ' ' + this.getMonthName(file.fileMonth) + ' ' + file.fileYear
            return finalName
        },
        viewTag(file) {
            var isVideo = require('is-video');
            if(isVideo(file.fileLocation)) {
                const fileExt = file.fileName.substr(7, 10)
                const htmlBlock = '\
                <video class="container-fluid" id="video-view" controls>\
                    <source src="' + file.fileLocation + '" type="video/' + fileExt + '"/>\
                </video>'
                return htmlBlock
            } else {
                const htmlBlock = '\
                <a href="' + file.fileLocation + '" target="_blank">\
                    <img class="container-fluid" id="image-view" src="' + file.fileLocation + '"/>\
                </a>'
                return htmlBlock
            }
        }
    },
    metaInfo() {
        return {
            meta: [
                {property: 'og:title', content: `${this.fileTime(this.file.fileName)}`},
                {property: 'og:site_name', content: 'diamkil\'s Img Website'},
                {property: 'og:type', content: 'website'},
                {property: 'og:image', content: this.file.fileLocation},
                {property: 'og:image:secure_url', content: this.file.fileLocation},
                {property: 'og:image:width', content: '1920'},
                {property: 'og:image:height', content: '1080'},
                {property: 'og:description', content: `${this.fileDate(this.file)}`}
            ]
        }
    }
}
</script>

<style>
    #diamkil-img {
        height: 50px;
    }
    #video-view {
        padding-right: 10%;
        padding-left: 10%;
        outline: 0px;
    }
    #image-view {
        padding-right: 10%;
        padding-left: 10%;
    }
    #logo {
        height: 50px;
    }
    .white-text {
        color: white;
    }
</style>
