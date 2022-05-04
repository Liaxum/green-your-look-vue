<template>
    <v-container>
        <v-row align="center" v-if="returnType() == 'Femmes'">
            <v-col cols="12" md="3" sm="6" xs="12" v-for="(styleF, f) in stylesFemmes" :key="f">
                <v-card :to="returnType() + '/' + styleF.title" max-width="220">
                    <v-img :src="require('@/assets/femmes/' + styleF.img + '.png')" alt="styleF-type"></v-img>
                    <v-card-title class="title">{{ styleF.title }}</v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row align="center" v-if="returnType() == 'Hommes'">
            <v-col cols="12" md="3" sm="6" xs="12" v-for="(styleH, h) in stylesHommes" :key="h">
                <v-card :to="returnType() + '/' + styleH.title" max-width="220">
                    <v-img :src="require('@/assets/hommes/' + styleH.img + '.png')" alt="styleH-type"></v-img>
                    <v-card-title class="title">{{ styleH.title }}</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "StyleCard",
    data() {
        return {
            stylesFemmes: [
                { img: 'basique', title: 'Basique' },
                { img: 'boheme', title: 'Bohème' },
                { img: 'casual', title: 'Casual' },
                { img: 'chic', title: 'Chic' },
                { img: 'gothique', title: 'Gothique' },
                { img: 'streetwear', title: 'Streetwear' },
                { img: 'vintage', title: 'Vintage' },
                { img: 'feminin', title: 'Féminin' },
            ],
            stylesHommes: [
                { img: 'basique', title: 'Basique' },
                { img: 'boheme', title: 'Bohème' },
                { img: 'casual', title: 'Casual' },
                { img: 'chic', title: 'Chic' },
                { img: 'gothique', title: 'Gothique' },
                { img: 'streetwear', title: 'Streetwear' },
                { img: 'vintage', title: 'Vintage' },
                { img: 'masculin', title: 'Masculin' },
            ]
        }
    },
    methods: {
        returnType() {
            return this.$route.params.type;
        },
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