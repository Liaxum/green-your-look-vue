import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: "#6B2737",
				secondary: "#F8F0DF",
				accent: "#79B4B7",
				info: "#777777",
			},
		},
	},
});
