import {createWebHistory, createRouter} from 'vue-router'

import Base from "@/views/base/Main.vue"
import Login from "@/views/login/Login.vue"
import Dashboard from "@/views/main/Dashboard.vue"

var routes = [
	{
		path : '/',
		redirect : '/login'
	},
	{
		path : '/login',
		component : Login
	},
	{
		path : '/main',
		component : Base,
		children : [
			{
				path : 'dashboard',
				component : Dashboard
			}
		]
	}
];

const history = createWebHistory();
const router = createRouter({
 history,
 routes
});

export default router;
