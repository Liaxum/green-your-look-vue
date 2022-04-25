<template>
    <v-app-bar height="80px" app color="secondary">
		<div class="d-flex align-center">
			<v-img alt="Logo" class="logo" contain 
			:src="require('../../assets/logo.png')" width="150"/>
		</div>
		<v-tabs color="primary">
			<v-tab>OUTFITS FEMMES</v-tab>
          	<v-tab class="mr-5">OUTFITS HOMMES</v-tab>
			<v-text-field placeholder="Rechercher" clearable solo class="shrink mx-4 mt-3" ></v-text-field>
			<v-spacer></v-spacer>
          	<v-tab>Créer son style</v-tab>
          	<v-btn icon href=""><v-icon color="black">mdi-account</v-icon></v-btn>
          	<v-btn icon href=""><v-icon color="black">mdi-cards-heart</v-icon></v-btn>
          	<v-btn icon href=""><v-icon color="black">mdi-cart</v-icon></v-btn>
		</v-tabs>
	</v-app-bar>
</template>


<script>
	export default {
		name: "AppHeader"
    }
</script>

<style scoped>
	.logo {
		margin-left: 30px;
		margin-right: 60px;
	}

	.v-btn {
		margin-top: 15px;
		margin-right: 10px;
	}

</style>