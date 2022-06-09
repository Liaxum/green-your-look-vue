<template>
	<v-expansion-panels>
		<v-expansion-panel>
			<v-expansion-panel-header>
				Blouse courte à nouer
			</v-expansion-panel-header>
			<v-expansion-panel-content>
				<v-card elevation="0">
					<v-row>
						<v-col cols="12" sm="4">
							<v-img
								max-width="150px"
								:src="require(`@/assets/${img}`)"
								alt="look"
							></v-img>
						</v-col>
						<v-col cols="12" sm="8">
							<v-card-text>
								<div>
									Labels :
									Bio
								</div>
								<div>
									Prix :
									21,40€
								</div>
							</v-card-text>
							<v-card-text>
								<v-chip-group
									v-model="
										selection
									"
									active-class="primary accent-4 white--text"
									column
								>
									<v-chip
										>XS</v-chip
									>
									<v-chip
										>S</v-chip
									>
									<v-chip
										>M</v-chip
									>
									<v-chip
										>L</v-chip
									>
									<v-chip
										>XL</v-chip
									>
									<v-chip
										>XXL</v-chip
									>
								</v-chip-group>
							</v-card-text>
						</v-col>
					</v-row>
				</v-card>
			</v-expansion-panel-content>
		</v-expansion-panel>
	</v-expansion-panels>
</template>

<script>
	export default {
		name: "ItemCard",
		data() {
			return {
				selection: 1,
			};
		},
		props: {
			img: { required: true, type: String },
		},
	};
</script>

<style></style>
