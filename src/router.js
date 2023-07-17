import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import User from "./views/User.vue";

const history = createWebHistory();

export const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		children: [{ path: "/user", name: "User", component: User }],
	},
	{ path: "/about", name: "About", component: About },
];

const router = createRouter({
	history,
	routes,
});

export default router;
