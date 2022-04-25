<template>
  <div>
    <v-footer color="primary" padless dark class="d-none d-md-flex">
      <v-row justify="center" no-gutters>
        <v-col class="py-0 mt-5" cols="12" sm="2">
          <v-list color="transparent">
            <v-list-item style="margin-left: 60px;">
              <v-list-item-content>
                <v-list-item-title style="margin-bottom: 20px; font-weight: 600; font-size: 16px;">
                  Informations
                </v-list-item-title>
                <v-list-item-subtitle style="font-size: 14px; color:white;">Livraison</v-list-item-subtitle>
                <v-list-item-subtitle style="font-size: 14px; color:white;">Paiement</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="py-0 mt-5" cols="12" sm="3">
          <v-list color="transparent">
            <v-list-item style="margin-left: 60px;">
              <v-list-item-content>
                <v-list-item-title style="margin-bottom:20px; font-weight: 600; font-size: 16px;">
                  A propos
                </v-list-item-title>
                <v-list-item-subtitle style="font-size: 14px; color:white;">Notre identité</v-list-item-subtitle>
                <v-list-item-subtitle style="font-size: 14px; color:white;">greenyourlook@gmail.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="py-0 mt-5" cols="12" sm="3">
          <v-list color="transparent">
            <v-list-item style="margin-left: -20px;">
              <v-list-item-content>
                <v-list-item-title style="font-weight: 600; font-size: 16px;">
                  Réseaux sociaux
                </v-list-item-title>
                <v-list-item-icon style="margin-left:-5px;">
                  <v-btn icon href="https://www.facebook.com/" target="_blank"><v-icon color="white">mdi-facebook</v-icon></v-btn>
                  <v-btn icon href="https://instagram.com/green_your_look" target="_blank"><v-icon  color="white">mdi-instagram</v-icon></v-btn>
                  <v-btn icon href="https://www.pinterest.fr/" target="_blank"><v-icon color="white">mdi-pinterest</v-icon></v-btn>
                  <v-btn icon href="https://www.youtube.com/" target="_blank"><v-icon color="white">mdi-youtube</v-icon></v-btn>
                </v-list-item-icon>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="py-0 mt-5" cols="12" sm="1">
          <v-list color="transparent">
            <v-list-item style="margin-left: -70px;">
              <v-list-item-content>
                <v-list-item-title style="margin-top:30px; font-weight: 600; font-size: 16px;">
                  Newsletter
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="py-0 mt-5" cols="12" sm="2">
          <v-text-field style="margin-top: 30px; margin-left: -70px;" label="Adresse email" dense filled></v-text-field>
        </v-col>
        <v-col class="py-0 mt-5" cols="12" sm="1">
          <v-btn style="margin-top:30px; margin-left:-60px; height: 53px;" small outlined elevation="8" >S'inscrire</v-btn>        </v-col>


        <v-col class="primary white--text" cols="12" sm="6">
          <v-divider></v-divider>
          <v-card-text style="padding-left:70px;">
            © {{ new Date().getFullYear() }} Green Your Look
          </v-card-text>
        </v-col>
        <v-col class="primary white--text" >
          <v-divider></v-divider>
          <v-card-text style="display:flex; padding-left:175px;">
            <div class="parameter">Conditions générales</div>
            <div class="parameter">Confidentialité et cookies</div>
            <div class="parameter">Mentions légales</div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-footer>
    <v-footer class="d-md-none">
      
    </v-footer>
  </div>

</template>

<script>
	export default {
		name: "AppFooter",
    }
</script>

<style scoped>

  .v-btn {
    margin-right: 10px;
    font-family: 'Josefin Sans', sans-serif;
  }

  .v-list, div {
    font-family: 'Josefin Sans', sans-serif;
  }

  .parameter {
    margin-right: 30px;
  }

  .v-text-field input {
    font-size: 14px;
  }

</style>
