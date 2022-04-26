<template>
	<v-tab-item>
		<v-card centered>
			<v-card-text class="text-center">
				<v-form ref="register">
					<v-text-field
						v-model="registerForm.mail"
						type="mail"
						label="Mail"
						:rules="[
							rules.required,
							rules.mail,
						]"
					/>
					<v-text-field
						v-model="registerForm.password"
						type="password"
						label="Password"
						:rules="[rules.required]"
					/>
					<v-btn
						color="primary"
						@click="submitRegister"
					>
						Inscription
					</v-btn>
				</v-form>
				<br />
				<v-alert v-if="errorRegister" type="error">
					Identifiant Invalide.
				</v-alert>
			</v-card-text>
		</v-card>
	</v-tab-item>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "RegisterForm",
		data() {
			return {
				errorRegister: false,
				registerForm: {
					mail: "",
					password: "",
				},
				rules: {
					required: (v) =>
						!!v || "Ne peut pas être vide.",
					mail: (value) => {
						const pattern =
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
						return (
							pattern.test(value) ||
							"E-mail invalid."
						);
					},
				},
			};
		},
		methods: {
			...mapActions(["register"]),
			async submitRegister() {
				if (this.$refs.register.validate()) {
					try {
						await this.register(
							this.registerForm
						);
						this.errorRegister = false;
						this.$router.push("/");
					} catch (e) {
						this.errorRegister = true;
					}
				}
			},
		},
	};
</script>
