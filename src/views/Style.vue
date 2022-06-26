<template>
  <v-container class="mb-5">
    <h1>{{ style }} {{ type }}</h1>
    <h4>
      Découvrez notre sélection de looks {{ style }} pour {{ type }}. Des tenues
      complètes de vêtements éco-responsables.
    </h4>
    <look-card />
  </v-container>
</template>

<script>
import LookCard from "../components/cards/LookCard";

export default {
  name: "Looks",

  data() {
    return {
      type: this.$route.params.type,
      style: this.$route.params.style,
    };
  },

  components: {
    LookCard,
  },

  watch: {
    $route() {
      this.type = this.$route.params.type;
    },
  },
};
</script>

<style>
h1 {
  margin: 30px 0;
  font-size: 20;
  font-weight: 500;
}

h4 {
  margin: 20px 0;
  font-size: 18px;
  font-weight: 400;
}
</style>