<template>
	<v-card flat>
		<v-card-text>
			<v-data-table
				fixed-header
				:headers="headers"
				:items="stateCategories"
			>
				<template #item.action="{ item }">
					<v-btn fab icon color="orange">
						<v-icon> mdi-pencil </v-icon>
					</v-btn>
					<v-btn
						color="red"
						icon
						fab
						@click="deleteItem(item)"
					>
						<v-icon> mdi-delete </v-icon>
					</v-btn>
				</template>
			</v-data-table>
		</v-card-text>
		<v-card-actions style="justify-content: right">
			<v-btn color="primary" dark @click="dialog = true"
				>Ajouter une Catégorie</v-btn
			>
		</v-card-actions>
		<AddCategory v-if="dialog" :dialog.sync="dialog" />
	</v-card>
</template>
<script>
	import { mapActions, mapGetters } from "vuex";
	import AddCategory from "./dialog/addCategory.vue";

	export default {
		name: "Categories",
		async created() {
			this.$root.$overlay.show();
			await this.getCategories();
			this.$root.$overlay.hide();
		},
		data() {
			return {
				dialog: false,
				headers: [
					{
						text: "Nom",
						value: "name",
					},
					{
						text: "",
						value: "action",
						sortable: false,
						width: "20%",
					},
				],
			};
		},
		computed: {
			...mapGetters(["stateCategories"]),
		},
		methods: {
			...mapActions(["getCategories", "deleteCategory"]),
			deleteItem(item) {
				this.$root
					.$confirm(
						"Suppression d'une catégorie",
						"Voulez-vous vraiment supprimer cette catégorie ?",
						{
							color: "red",
							width: 500,
						}
					)
					.then(async () => {
						this.$root.$overlay.show("Suppression d'une catégorie");
						try {
							await this.deleteCategory(item.id);
						} catch (e) {
							this.$root.$notif('Erreur lors de la suppression, Veuillez réssayer !', {type: 'error'});
						}
						this.$root.$overlay.hide();
					})
					.catch((e) => {});
			},
		},
		components: {
			AddCategory,
		},
	};
</script>

<style></style>
