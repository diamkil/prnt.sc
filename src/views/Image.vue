<template>
    <div>
        <h1>
            <span class="float-right">
                Date: {{ fileName(file.fileName) +' ' + file.fileDay +' ' + getMonthName(file.fileMonth) + ' ' + file.fileYear + ' (Easter Time)' }}
            </span>
            <router-link class="float-left" to="/" style="text-decoration: none; color: #303030;">
                <img 
                src="https://img.dkil.ca/diamkil.gif"
                alt="Animated Diamkil"
                style="height: 50px"
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
    }
}

// /:year/:month/:day/:time
</script>
