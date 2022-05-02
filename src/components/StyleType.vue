<template>
    <v-container>
        <v-row align="center">
            <v-col cols="12" md="3" sm="6" xs="12" v-for="(style, i) in styles" :key="i">
                <v-card to="/looks" max-width="220">
                    <v-img :src="require('@/assets/femmes/' + style.img + '.png')" alt="style-type"></v-img>
                    <v-card-title class="title">{{ style.title }}</v-card-title>
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
                { img: 'basique', title: 'Basique' },
                { img: 'boheme', title: 'Bohème' },
                { img: 'casual', title: 'Casual' },
                { img: 'chic', title: 'Chic' },
                { img: 'gothique', title: 'Gothique' },
                { img: 'streetwear', title: 'Streetwear' },
                { img: 'vintage', title: 'Vintage' },
                { img: 'feminin', title: 'Féminin' },
            ]
        }
    }
}
</script>

<style scoped>
    .title {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 500;
        justify-content: center;
    }
</style>