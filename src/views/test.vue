<template>
	<div>
		<v-text-field type="mail" v-model="mail" />
		<v-text-field type="password" v-model="password" />
		<v-btn @click="submit">login</v-btn>
		<p>Login: {{ loginError ? loginError : "Good" }}</p>
		<v-divider />
		
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		data() {
			return {
				mail: "",
				password: "",
				loginError: false,
			};
		},
		methods: {
			...mapActions(["login"]),
			async submit() {
				const usr = {
					mail: this.mail,
					password: this.password,
				};
				try {
					await this.login(usr);
					this.loginError = false;
				} catch (e) {
					this.loginError = e.message;
				}
			},
		},
	};
</script>

<style></style>
