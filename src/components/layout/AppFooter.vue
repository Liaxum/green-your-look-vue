<template>
  <v-footer color="primary lighten-1" padless dark>
    <v-row justify="center" no-gutters>
      <v-col class="py-4" cols="12" sm="3" >
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Informations</v-list-item-title>
              <v-list-item-subtitle>Livraison</v-list-item-subtitle>
              <v-list-item-subtitle>Paiement</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="py-4" cols="12" sm="3">
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>A propos</v-list-item-title>
              <v-list-item-subtitle>Notre identité</v-list-item-subtitle>
              <v-list-item-subtitle>greenyourlook@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="py-4" cols="12" sm="3" >
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Réseaux sociaux</v-list-item-title>
              <v-list-item-icon>
                <v-btn icon href=""><v-icon color="white">mdi-facebook</v-icon></v-btn>
                <v-btn icon href="https://instagram.com/green_your_look" target="_blank"><v-icon color="white">mdi-instagram</v-icon></v-btn>
                <v-btn icon href=""><v-icon color="white">mdi-pinterest</v-icon></v-btn>
                <v-btn icon href=""><v-icon color="white">mdi-youtube</v-icon></v-btn>
              </v-list-item-icon>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="py-4" cols="12" sm="3">
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Newsletter</v-list-item-title>
              <v-text-field label="Adresse email" dense filled ></v-text-field>
              <v-btn color="white" text @click="submit">S'inscrire</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>

      <v-divider></v-divider>

      <v-col class="primary white--text text-center" cols="12">
        <v-card-text>
          <v-btn text small color="white">Conditions Générales</v-btn>
          <v-btn text small color="white">Confidentialité et cookies</v-btn>
          <v-btn text small color="white">Mentions légales</v-btn>
        </v-card-text>
        <v-card-text>
          <strong>© {{ new Date().getFullYear() }} Green Your Look</strong>
        </v-card-text>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
	export default {
		name: "AppFooter",
    }
</script>

<style scoped>

  .v-btn {
    margin-right: 10px;
  }
</style>