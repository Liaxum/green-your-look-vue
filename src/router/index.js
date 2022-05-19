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
		path: "/test",
		name: "test",
		component: () => import("../views/test.vue"),
	},
	{
		path: "/Compte",
		name: "compte",
		component: () => import("../views/ProfilViews/Compte.vue")
	},
	{
		path: "/Blog",
		name: "blog",
		component: () => import("../views/StaticViews/Blog.vue")
	},
	{
		path: "/Identite",
		name: "identite",
		component: () => import("../views/StaticViews/Identite.vue")
	},
	{
		path: "/Historique",
		name: "historique commandes",
		component: () => import("../views/ProfilViews/Historique.vue")
	},
	{
		path: "/Commander",
		name: "commander",
		component: () => import("../views/Commander.vue")
	},
	{
		path: "/Favoris",
		name: "favoris",
		component: () => import("../views/ProfilViews/Favoris.vue")
	},
	{
		path: "/Panier",
		name: "panier",
		component: () => import("../views/ProfilViews/Panier.vue")
	},
	{
		path: "/:type",
		name: "type",
		component: () => import("../views/ListStyles.vue"),
	},
	{
		path: "/:type/:style",
		name: "style",
		component: () => import("../views/Style.vue"),
	},
	
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
