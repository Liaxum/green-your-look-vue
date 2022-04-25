<template>
	<v-dialog v-model="dialogLoginRegister" max-width="950" persistent>
		<v-toolbar color="secondary">
			<v-tabs v-model="tab" centered>
				<v-tab key="1">
					Connexion
				</v-tab>
				<v-tab key="2">
					Connexion
				</v-tab>
			</v-tabs>
			<v-spacer/>
			<v-btn icon @click.native="dialogLoginRegister = false">
				<v-icon>mdi-close</v-icon>
			</v-btn>
		</v-toolbar>

		<v-tabs-items v-model="tab">
			<LoginForm key="1" @logged="dialogLoginRegister = false"/>
			<RegisterForm key="2" @registered="dialogLoginRegister = false"/>
		</v-tabs-items>
	</v-dialog>
</template>

<script>
	import LoginForm from "./LoginForm.vue";
	import RegisterForm from "./RegisterForm.vue";
	export default {
		created() {},
		name: "LoginRegister",
		props: {
			dialog: { required: true, type: Boolean },
		},
		data() {
			return {
				tab: null,
			};
		},
		computed: {
			dialogLoginRegister: {
				get() {
					return this.dialog;
				},
				set(value) {
					this.$emit("update:dialog", value);
				},
			},
		},
		components: {
			LoginForm,
			RegisterForm,
		},
	};
</script>

<style scoped>
.v-tabs {
	padding-left: 48px;
}
</style>
