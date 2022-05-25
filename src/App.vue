<template>
	<v-app>
		<AppHeader />
		<v-main fluid fill-height>
			<Notification
				ref="notif"
				dismissible
				:defaultTimeout="7000"
			/>
			<v-layout class="align-center justify-center">
				<router-view />
			</v-layout>
		</v-main>
		<AppFooter />
		<LoginRegister ref="loginRegister"/>
		<Confirm ref="confirm" />
		<Overlay ref="overlay" />
	</v-app>
</template>

<script>
	import AppHeader from "../src/components/layout/AppHeader.vue";
	import AppFooter from "../src/components/layout/AppFooter.vue";
	import LoginRegister from "./components/login_register/Login_Register.vue";
	import Confirm from "./components/utils/Confirm.vue";
	import Notification from "./components/utils/Notification.vue";
	import Overlay from "./components/utils/Overlay.vue";

	document.title = "Green Your Look";

	export default {
		name: "App",
		mounted() {
			this.$root.$overlay = {
				show: this.$refs.overlay.show,
				hide: this.$refs.overlay.hide,
			};
			this.$root.$confirm = this.$refs.confirm.open;
			this.$root.$notif = this.$refs.notif.newAlert;
			this.$root.$loginRegister = this.$refs.loginRegister.open;
		},
		components: {
			AppHeader,
			AppFooter,
			LoginRegister,
			Confirm,
			Notification,
			Overlay,
		},
	};
</script>
