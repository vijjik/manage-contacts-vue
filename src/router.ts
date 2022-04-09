import { createRouter, createWebHistory } from 'vue-router'
import Register from './components/Register.vue'
import SignIn from './components/SignIn.vue'
import User from './components/User.vue'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/signin' },
		{ path: '/register', name: 'register', component: Register },
		{ path: '/signin', name: 'signin', component: SignIn },
		{ path: '/users/:userId', name: 'user', component: User },
	]
})
