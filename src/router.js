import { createRouter, createWebHistory } from "vue-router";
import Inbox from "./views/Inbox.vue";
import Today from "./views/Today.vue";
import TodayChildren from "./views/TodayChildren.vue";

const history = createWebHistory();

export const routes = [
	{
		path: "/inbox",
		name: "Inbox",
		component: Inbox,
	},
	{
		path: "/today",
		name: "Today",
		component: Today,
		children: [
			{
				path: "/today/:children",
				name: "TodayChildren",
				component: TodayChildren,
			},
		],
	},
	{ path: "/", redirect: { name: "Inbox" } },
];

const router = createRouter({
	history,
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = to.name;
	next();
});

export default router;
