<template>
	<v-card flat>
		<v-card-text>
			<v-data-table
				fixed-header
				:headers="headers"
				:items="stateCategories"s
			>
				<template #item.action="{item}">
					<v-btn fab icon color="orange">
						<v-icon> mdi-pencil </v-icon>
					</v-btn>
					<v-btn icon fab color="red" @click="delete(item.id)">
						<v-icon> mdi-delete </v-icon>
					</v-btn>
				</template>
			</v-data-table>
		</v-card-text>
		<v-card-actions style="justify-content: right;">
			<v-btn color="primary" dark @click="dialog = true">Ajouter une Catégorie</v-btn>
		</v-card-actions>
		<AddCategory v-if="dialog" :dialog.sync="dialog"/>
	</v-card>
</template>
<script>
	import { mapActions, mapGetters, mapMutations } from "vuex";
	import AddCategory from './dialog/addCategory.vue'

	export default {
		name: "Categories",
		async created() {
			await this.getCategories();
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
			async delete(id) {
				console.log('delete category');
				try {
					await this.deleteCategory(id);
				} catch (error) {
					console.log(error)
				}
			}
		},
		components: {
			AddCategory
		}
	};
</script>

<style></style>
