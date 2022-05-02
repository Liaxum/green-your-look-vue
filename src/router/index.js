import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/femmes",
		name: "type",
		component: () => import("../views/Outfits.vue"),
	},
	{
		path: "/looks",
		name: "looks",
		component: () => import("../views/Looks.vue"),
	},
	{
		path: "/test",
		name: "test",
		component: () => import("../views/test.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
