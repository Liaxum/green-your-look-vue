<template>
  <div style="width: 100%">
    <v-banner color="primary" class="text-center" max-height="150">
      Chez Green Your Look, nous mettons en avant des marques respectueuses de
      l'environnement
    </v-banner>
    <v-carousel class="carousel" cycle interval="3000" show-arrows-on-hover hide-delimiter-background>
      <template v-for="(item, index) in slider">
        <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1" :key="index">
          <v-row class="flex-nowrap" style="height: 100%">
            <template v-for="(n, i) in columns">
              <template v-if="+index + i < slider.length">
                <v-col :key="i">
                  <v-row
                    v-if="+index + i < slider.length"
                    height="100%"
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <v-img
                      :src="require('../assets/' + slider[+index + i] + '.png')" 
                      style="width: 10px; height: 120%;"
                    />
                  </v-row>
                </v-col>
              </template>
            </template>
          </v-row>
        </v-carousel-item>
      </template>
    <v-banner color="secondary" class="text-center" max-height="150">
      Découvrez des looks stylés et éco-responsables
    </v-banner>
    </v-carousel>
    <v-card>
      <v-card-title>Nouveautés</v-card-title>
      <v-card-subtitle
        >Découvrez les dernières nouveautés : des looks complets et
        tendances</v-card-subtitle
      >
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},

  data() {
    return {
      slider: [
        "femmes/basique",
        "hommes/casual",
        "femmes/boheme",
        "hommes/chic",
        "femmes/chic",
        "hommes/streetwear",
        "femmes/gothique",
        "hommes/vintage",
      ],
    };
  },

  computed: {
    columns() {
      if (this.$vuetify.breakpoint.lg) {
        return 4;
      }
      if (this.$vuetify.breakpoint.md) {
        return 2;
      }
      if (this.$vuetify.breakpoint.sm) {
        return 2;
      }
      return 1;
    },
  },
};
</script>

<style scoped>

.v-banner {
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  color: white;
}
</style>