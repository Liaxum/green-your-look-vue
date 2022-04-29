<template>
<div>
    <v-app-bar height="80px" app color="secondary">
		<v-app-bar-nav-icon class="d-md-none mt-0" @click="menu = true"></v-app-bar-nav-icon>
		<v-tabs color="primary" class="d-md-none">
			<v-tab to="/"><v-img alt="Logo" class="logo" contain 
				:src="require('../../assets/logo.png')" width="150"/>
			</v-tab>
		</v-tabs>

		<v-tabs color="primary" class="d-none d-md-block">
			<v-tab to="/"><v-img alt="Logo" class="logo" contain 
				:src="require('../../assets/logo.png')" width="150"/>
			</v-tab>
			<v-tab to="/women">OUTFITS FEMMES</v-tab>
			<v-tab to="/men" class="mr-5">OUTFITS HOMMES</v-tab>
			<v-text-field prepend-inner-icon="mdi-magnify" clearable solo class=" mx-4 mt-3" ></v-text-field>
			<v-spacer></v-spacer>
			<v-menu close-on-click offset-y>
				<template v-slot:activator="{ on, attrs }"> 
					<v-btn icon v-bind="attrs" v-on="on"><v-icon color="black">mdi-account</v-icon></v-btn>			
				</template>
				<v-list class="text-center">
					<v-list-item @click="login" class="pb-2" style="border-bottom: solid 1px black;">
						<v-list-item-title> Connexion / Inscription </v-list-item-title>
					</v-list-item>
					<v-list-item to="/account" class="py-2" style="border-bottom: solid 1px black">
						<v-list-item-title> Mon compte</v-list-item-title>
					</v-list-item>
					<v-list-item to="/orders" class="py-2" style="border-bottom: solid 1px black">
						<v-list-item-title> Mes commandes</v-list-item-title>
					</v-list-item>
					<v-list-item class="pt-2" to="/favorites">
						<v-list-item-title> Mes favoris</v-list-item-title>
					</v-list-item>
				</v-list>
	
			</v-menu>
			<v-btn icon to="/favorites"><v-icon color="black">mdi-cards-heart</v-icon></v-btn>
			<v-btn icon to="/cart"><v-icon color="black">mdi-cart</v-icon></v-btn>
		</v-tabs>
	</v-app-bar>

	<v-navigation-drawer v-model="menu" absolute temporary color="secondary">
        <v-list nav>
          	<v-list-item-group active-class="primary--text text--accent-4">

			<v-img alt="Logo" class="logo-carre" contain 
				:src="require('../../assets/logo-carre.png')" width="150"/>

			<v-text-field prepend-inner-icon="mdi-magnify" clearable solo class="mx-4 mt-2" ></v-text-field>

			<v-divider></v-divider>

            <v-list-item class="my-2 text-center" @click="login">
              <v-list-item-title >Connexion / Inscription</v-list-item-title>
            </v-list-item>

			<v-divider></v-divider>

            <v-list-item class="mt-3 mb-0 text-center" to="/women">
              <v-list-item-title>OUTFITS FEMMES</v-list-item-title>
            </v-list-item>
  
            <v-list-item class="mb-3 text-center" to="/men">
              <v-list-item-title>OUTFITS HOMMES</v-list-item-title>
            </v-list-item>

			<v-divider></v-divider>

            <v-list-item class="mt-3 ml-2" to="/account">
				<v-list-item-icon class="mr-4">
					<v-icon color="black">mdi-account</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
              		<v-list-item-title class="ml-2 mt-1">MON COMPTE</v-list-item-title>
				</v-list-item-content>
            </v-list-item>

            <v-list-item class="ml-2" to="/cart">
              	<v-list-item-icon class="mr-4">
					<v-icon color="black">mdi-cart</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
              		<v-list-item-title class="ml-2 mt-1">MON PANIER</v-list-item-title>
				</v-list-item-content>
            </v-list-item>

            <v-list-item class="ml-2" to="/orders">
              	<v-list-item-icon class="mr-4">
					<v-icon color="black">mdi-shopping</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
              		<v-list-item-title class="ml-2 mt-1">MES COMMANDES</v-list-item-title>
				</v-list-item-content>
            </v-list-item>

			<v-list-item class="ml-2" to="/favorites">
              	<v-list-item-icon class="mr-4">
					<v-icon color="black">mdi-cards-heart</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
              		<v-list-item-title class="ml-2 mt-1">MES FAVORIS</v-list-item-title>
				</v-list-item-content>
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
				menu: false
			}
		},
		methods: {
			login() {
				this.$emit('login', true);
				this.menu = false;
			}
		}
    }
</script>

<style scoped>
	.logo {
		margin-left: 30px;
		margin-right: 60px;
	}

	.logo-carre {
		display:block; 
		margin:auto; 
		margin-top: 10px; 
		margin-bottom: 20px;
	}

	.v-tab, .v-text-field, .v-list-item {
		font-family: 'Josefin Sans', sans-serif;
	}

	.v-btn {
		margin-top: 15px;
		margin-right: 10px;
	}
</style>