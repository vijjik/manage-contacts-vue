import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Register from './components/Register.vue'
import SignIn from './components/SignIn.vue'
import User from './components/User.vue'
import GroupsVue from './components/group-views/Groups.vue'
import ContactsVue from './components/contact-views/Contacts.vue'
import { store } from './store/state'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/signin' },
		{ path: '/register', name: 'register', component: Register },
		{ path: '/signin', name: 'signin', component: SignIn },
		{
			path: '/user/', name: 'user', component: User,
			children: [
				{
					path: 'contacts',
					component: ContactsVue,
				},
				{
					name: 'user.groups',
					path: 'groups',
					component: GroupsVue,
				},
			],
			redirect: {
				name: 'user.groups'
			},
			beforeEnter: (to, from, next) => {
				// reject the navigation if not coming from loggin
				const loginStatus = store.state.loggedIn;
				if (!loginStatus) {
					next("/")
				}
				else next()
			},
		},
	]
})


