<template>
  <v-container>
    <h1>Outfits {{ type }}</h1>
    <h4>
      Découvrez tous les outfits éco-responsables de différents styles pour
      {{ type }}.
    </h4>
    <p>
      <span>Green Your Look</span> propose des vêtements éthiques pour tous les
      styles. Choisissez parmi nos looks tendances la tenue qui vous correspond !
    </p>
    <style-type/>
  </v-container>
</template>

<script>
import StyleType from "../components/StyleType";

export default {
  name: "Outfits",

  components: {
    StyleType,
  },

  data() {
    return {
      type: this.$route.params.type,
    }
  },

};
</script>

<style scoped>
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

p {
  margin: 20px 0;
  font-size: 16px;
}

</style>