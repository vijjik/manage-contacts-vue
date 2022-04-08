import { createRouter, createWebHistory } from 'vue-router'
import Register from './components/Register.vue'
import SignIn from './components/Register.vue'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/signin' },
		{ path: '/register', name: 'register', component: Register },
		{ path: '/signin', name: 'signin', component: SignIn },
	]
})
