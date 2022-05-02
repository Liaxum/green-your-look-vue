<template>
  <v-container class="mb-5">
    <h1>Basique Femmes</h1>
    <h4>
      Découvrez notre sélection de looks basique pour femme. Des tenues
      complètes de vêtements éco-responsables
    </h4>
    <look-view />
  </v-container>
</template>

<script>
import LookView from "../components/LookView"

export default {
    name: "Looks",

    components: {
        LookView
    },

};
</script>

<style>

h1, h4, p {
  font-family: "Josefin Sans", sans-serif;
}

h1 {
  margin: 30px 0;
  font-size: 20;
  font-weight: 500;
}

h4 {
  font-size: 18px;
  font-weight: 500;
}
</style>