<template>
	<v-dialog v-model="dialogAdd">
		<v-card>
			<v-toolbar color="primary" dark>
				<v-toolbar-title>
					Ajouter une catégorie
				</v-toolbar-title>
				<v-spacer />
				<v-btn icon fab @click="cancel">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-toolbar>
			<v-card-text>
				<v-form>
					<v-text-field
						label="Nom de la catégorie"
						v-model="form.name"
					/>
				</v-form>
			</v-card-text>
			<v-card-actions style="justify-content: right">
				<v-btn dark color="red" @click="cancel"
					>Annuler</v-btn
				>
				<v-btn @click="submit">Valider</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	import { mapActions } from "vuex";

	export default {
		name: "AddCategory",
		props: {
			dialog: { require: true, type: Boolean },
		},
		data() {
			return {
				form: {
					name: ''
				}
			}
		},
		computed: {
			dialogAdd: {
				get() {
					return this.dialog;
				},
				set(value) {
					this.$emit("update:dialog", value);
				},
			},
		},
		methods: {
			...mapActions(["createCategorie"]),
			cancel() {
				this.dialogAdd = false;
			},
			async submit() {
				try {
					await this.createCategorie(this.form);
					this.cancel();
				} catch (e) {
					console.log(e);
				}
			},
		},
	};
</script>

<style></style>
