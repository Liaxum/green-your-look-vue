<template>
    <v-container>
        <v-row no-gutters align="center">
            <v-col cols="12" md="3" sm="6" xs="12" v-for="(style, i) in styles" :key="i">
                <v-card max-width="200">
                    <v-img :src="require('@/assets/femmes/' + style.img + '.png')" alt="style"></v-img>
                    <v-card-title class="justify-center">{{ style.title }}</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "StyleType",
    data() {
        return {
            styles: [
                { 
                    img: 'basique',
                    title: 'Basique'
                },
                { 
                    img: 'boheme',
                    title: 'Bohème'
                },
                { 
                    img: 'casual',
                    title: 'Casual'
                },
                { 
                    img: 'chic',
                    title: 'Chic'
                }
            ]
        }
    }
}
</script>

<style scoped>
    /* .img {
        width: 100px;
        height: auto;
    } */
</style>