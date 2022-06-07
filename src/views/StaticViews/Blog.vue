<template>
  <v-container class="my-5">
    <h1 style="text-align: center; margin-bottom:30px;">Bienvenue sur notre Blog !</h1>
    <v-row class="my-5" align="center">
      <v-col cols="12" md="4" sm="12">
        <v-card width="400px">
          <v-img max-width="400px" src="@/assets/blog/look-ete.png" alt="look-ete"></v-img>
          <v-card-title style="justify-content:center;">Femmes - Top 10 des looks été</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card width="400px">
          <v-img max-width="400px" src="@/assets/blog/conseils.png" alt="conseils"></v-img>
          <v-card-title style="justify-content:center;">Bien s'habiller : conseils et astuces</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card width="400px">
          <v-img max-width="400px" src="@/assets/blog/ecolo.png" alt="ecolo"></v-img>
          <v-card-title style="justify-content:center;">Acheter écolo à petit prix !</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card width="400px">
          <v-img max-width="400px" src="@/assets/blog/homme-automne.png" alt="homme-automne"></v-img>
          <v-card-title style="justify-content:center;">Hommes - Top 3 des looks automne</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card width="400px">
          <v-img max-width="400px" src="@/assets/blog/femme-automne.png" alt="femme-automne"></v-img>
          <v-card-title style="justify-content:center;">Femmes - Top 3 des looks automne</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card width="400px">
          <v-img max-width="400px" src="@/assets/blog/ethique.png" alt="ethique"></v-img>
          <v-card-title style="justify-content:center;">La mode éthique expliquée</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Blog",
};
</script>

<style>
</style>