<template>
	<v-app>
		<AppHeader @login="login"/>
		<v-main fluid fill-height>
			<v-layout class="align-center justify-center">
				<router-view />
			</v-layout>
		</v-main>
		<AppFooter />
		<LoginRegister v-if="dialogLoginRegister" :dialog.sync="dialogLoginRegister"/>
	</v-app>
</template>

<script>
	import AppHeader from "../src/components/layout/AppHeader.vue";
	import AppFooter from "../src/components/layout/AppFooter.vue";
	import LoginRegister from "./components/login_register/Login_Register.vue"

	document.title = "Green Your Look";

	export default {
		name: "App",
		data() {
			return { 
				dialogLoginRegister: false
			}
		},
		methods: {
			login(value) {
				this.dialogLoginRegister = value
			}
		},
		components: {
			AppHeader,
			AppFooter,
			LoginRegister
		}
	};
</script>
