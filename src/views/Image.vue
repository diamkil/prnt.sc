<template>
    <div>
        <h1>
            <span class="float-right white-text">
                {{ fileTime(file.fileName) +', ' + file.fileDay +' ' + getMonthName(file.fileMonth) + ' ' + file.fileYear }}
            </span>
            <router-link class="float-left" to="/" style="text-decoration: none; color: #303030;">
                <img 
                :src=this.config.logoUrl
                :alt=this.config.logoAlt
                id="logo">
                <span class="white-text">{{ this.config.logoTitle }}</span>
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
                fileLocation: this.config.imageBackendUrl + '/' + this.$route.params.year + '/' + this.$route.params.month + '/' + this.$route.params.day + '/' + this.$route.params.time,
                fileYear: this.$route.params.year,
                fileMonth: this.$route.params.month,
                fileDay: this.$route.params.day
            },
            monthsFr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            monthsEn: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        }
    },
    methods: {
        getMonthName(fileMonth) {
            const month = fileMonth-1
            if(this.config.lang === 'fr') {
                const monthName = this.monthsFr[month]
                return monthName
            } else if(this.config.lang === 'en') {
                const monthName = this.monthsEn[month]
                return monthName
            }
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
        },
        isVideoMetaProperty1(file) {
            const isVideo = require('is-video')
            if(isVideo(file.fileName)) {
                const type = 'og:video:type'
                const final = type.toString()
                return final
            } else {
                const type = 'og:image:secure_url'
                const final = type.toString()
                return final
            }
        },
        isVideoMetaContent1(file) {
            const isVideo = require('is-video')
            if(isVideo(file.fileName)) {
                const fileExt = file.fileName.substr(7, 10)
                const type = 'video/' + fileExt
                const final = type.toString()
                return final
            } else {
                const type = file.fileLocation
                const final = type.toString()
                return final
            }
        },
        isVideoMetaProperty2(file) {
            const isVideo = require('is-video')
            if(isVideo(file.fileName)) {
                const type = 'og:video'
                const final = type.toString()
                return final
            } else {
                const type = 'og:image'
                const final = type.toString()
                return final
            }
        }
    },
    metaInfo() {
        return {
            meta: [
                {property: 'og:title', content: `${this.fileTime(this.file.fileName)}`},
                {property: 'og:site_name', content: 'diamkil\'s Img Website'},
                {property: 'og:type', content: 'website'},
                {property: `${this.isVideoMetaProperty2(this.file)}`, content: `${this.file.fileLocation}`},
                {property: `${this.isVideoMetaProperty1(this.file)}`, content: `${this.isVideoMetaContent1(this.file)}`},
                {property: 'og:description', content: `${this.fileDate(this.file)}`}
            ],
            title: this.config.pageTitle + ' | ' + `${this.fileTime(this.file.fileName)}`
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
