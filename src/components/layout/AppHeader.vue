<template>
<div>
    <v-app-bar height="80px" app color="secondary">
		<v-app-bar-nav-icon class="d-md-none" @click="test = true"></v-app-bar-nav-icon>
		<div class="d-flex align-center">
			<v-img alt="Logo" class="logo" contain 
			:src="require('../../assets/logo.png')" width="150"/>
		</div>
		<v-tabs color="primary" class="d-none d-md-block">
			<v-tab>OUTFITS FEMMES</v-tab>
			<v-tab class="mr-5">OUTFITS HOMMES</v-tab>
			<v-text-field prepend-inner-icon="mdi-magnify" clearable solo class=" mx-4 mt-3" ></v-text-field>
			<v-spacer></v-spacer>
			<!-- <v-tab>Créer son style</v-tab> -->
			<v-btn icon to="/account"><v-icon color="black">mdi-account</v-icon></v-btn>
			<v-btn icon to="/favorites"><v-icon color="black">mdi-cards-heart</v-icon></v-btn>
			<v-btn icon to="/cart"><v-icon color="black">mdi-cart</v-icon></v-btn>
		</v-tabs>
	</v-app-bar>
	<v-navigation-drawer v-model="test" absolute temporary
      >
        <v-list nav>
          <v-list-item-group
            active-class="primary--text text--accent-4"
          >

		  	<v-list-item>
              <v-img alt="Logo" class="logo" contain 
				:src="require('../../assets/logo.png')" width="150"/>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
					<v-text-field prepend-inner-icon="mdi-magnify" clearable solo class=" mx-4 mt-3" ></v-text-field>
			  </v-list-item-title>
            </v-list-item>

			<v-divider></v-divider>

            <v-list-item>
              <v-list-item-title>OUTFITS FEMMES</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>OUTFITS HOMMES</v-list-item-title>
            </v-list-item>

			<v-divider></v-divider>

            <v-list-item>
              <v-list-item-title>MON PANIER</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>MES COMMANDES</v-list-item-title>
            </v-list-item>

			<v-list-item>
              <v-list-item-title>MES FAVORIS</v-list-item-title>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
</div>
</template>


<script>
	export default {
		name: "AppHeader",
		data() {
			return {
				test: false
			}
		}
    }
</script>

<style scoped>
	.logo {
		margin-left: 30px;
		margin-right: 60px;
	}

	.v-tab, .v-text-field {
		font-family: 'Josefin Sans', sans-serif;
	}

	.v-btn {
		margin-top: 15px;
		margin-right: 10px;
	}
</style>
