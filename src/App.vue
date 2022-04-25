<template>
	<v-app>
		<AppHeader />
		<v-main>
			<router-view />
		</v-main>
		<AppFooter />
	</v-app>
</template>

<script>

	import AppHeader from '../src/components/layout/AppHeader.vue';
	import AppFooter from '../src/components/layout/AppFooter.vue';

	document.title = 'Green Your Look';

	export default {
		name: "App",
		components: {
			AppHeader,
			AppFooter
		},

		data: () => ({
			//
		}),
	};
</script>
