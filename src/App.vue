<template>
	<v-app
		:style="{
			background: $vuetify.theme.themes['light'].secondary,
		}"
	>
		<v-row class="text-center">
			<v-col class="mb-4">
				<v-col cols="12">
					<v-img
						:src="
							require('./assets/MyDigitalProject Logo.png')
						"
						class="my-3"
						contain
						height="200"
					/>
				</v-col>
				<h1 class="display-2 font-weight-bold mb-3">
					Bienvenue sur Green Ysour Look !
				</h1>
				<p class="subheading font-weight-regular">
					Notre site est en construction. <br />
					Pour les plus curieux, vous pouvez avoir
					un aperçu du projet grâce à la maquette.
					<br />
				</p>
				<br />
				<iframe
					style="
						border: 1px solid
							rgba(0, 0, 0, 0.1);
					"
					width="100%"
					height="450"
					allowfullscreen
					src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FvOJbndNlLbGBpXcy7H1CwP%2FMyDigitalProject%3Fnode-id%3D1%253A3%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A3"
				></iframe>
				<br /><br />
				<h2 class="headline font-weight-bold mb-3">
					Retrouvez nous sur nos réseaux
				</h2>
				<a href="http://instagram.com/green_your_look"
					><v-icon>mdi-instagram</v-icon></a
				>
				<p>
					<br />
					Vous pouvez aussi nous contacter par
					<v-icon>mdi-gmail</v-icon>
					greenyourlook@gmail.com
				</p>
			</v-col>
		</v-row>
	</v-app>
</template>

<script>
	export default {
		name: "App",

		data: () => ({
			//
		}),
	};
</script>
