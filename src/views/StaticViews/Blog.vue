<template>
  <v-container class="mb-5">
    <h1>
      Bienvenue sur notre Blog !
    </h1>
    <v-row align="center">
      <v-col cols="12" md="4" sm="12">
        <v-card width="400px">
          <v-img
            max-width="400px"
            src="@/assets/blog/look-ete.png"
            alt="look-ete"
          ></v-img>
          <v-card-title
            style="
              justify-content: center;
              font-family: 'Josefin Sans', sans-serif;
              font-weight: 400;
            "
            >Femmes - Top 10 des looks été</v-card-title
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card width="400px">
          <v-img
            max-width="400px"
            src="@/assets/blog/conseils.png"
            alt="conseils"
          ></v-img>
          <v-card-title
            style="
              justify-content: center;
              font-family: 'Josefin Sans', sans-serif;
              font-weight: 400;
            "
            >Bien s'habiller : conseils et astuces</v-card-title
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card width="400px">
          <v-img
            max-width="400px"
            src="@/assets/blog/ecolo.png"
            alt="ecolo"
          ></v-img>
          <v-card-title
            style="
              justify-content: center;
              font-family: 'Josefin Sans', sans-serif;
              font-weight: 400;
            "
            >Acheter écolo à petit prix !</v-card-title
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card width="400px">
          <v-img
            max-width="400px"
            src="@/assets/blog/matieres.png"
            alt="homme-automne"
          ></v-img>
          <v-card-title
            style="
              justify-content: center;
              font-family: 'Josefin Sans', sans-serif;
              font-weight: 400;
            "
            >3 matières éco-responsables
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card width="400px">
          <v-img
            max-width="400px"
            src="@/assets/blog/femme-automne.png"
            alt="femme-automne"
          ></v-img>
          <v-card-title
            style="
              justify-content: center;
              font-family: 'Josefin Sans', sans-serif;
              font-weight: 400;
            "
            >Femmes - Top 3 des looks automne</v-card-title
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card width="400px">
          <v-img
            max-width="400px"
            src="@/assets/blog/ethique.png"
            alt="ethique"
          ></v-img>
          <v-card-title
            style="
              justify-content: center;
              font-family: 'Josefin Sans', sans-serif;
              font-weight: 400;
            "
            >La mode éthique expliquée</v-card-title
          >
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

<style scoped>
h1 {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  font-size: 30px;
  text-align: center; 
  margin: 40px 0;
}
</style>