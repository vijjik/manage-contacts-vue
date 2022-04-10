import { createStore } from 'vuex'

export const store = createStore({
	state: {
		loggedIn: false,
		loggedUser: {},
		contacts: [],
		groups: [],

		// contacts: [
		// 	{ 'contactid': 1, 'firstname': 'Contact - 1', 'lastname': 'contact-ls-1', 'phone': '132313' },
		// 	{ 'contactid': 2, 'firstname': 'Contact - 2', 'lastname': 'contact-ls-2', 'phone': '9923232323' },
		// 	{ 'contactid': 3, 'firstname': 'acontsfsdf', 'lastname': 'contact-ls-1', 'phone': '57567' },
		// 	{ 'contactid': 4, 'firstname': 'Contact - 1', 'lastname': 'contact-ls-2', 'phone': '345345' },
		// ],
		// groups: [
		// 	{ 'groupname': 'group 1', 'groupid': 1, 'groupactive': true, 'groupcontacts': [1, 2] },
		// ]
	},
	getters: {
		getLoginStatus: (state) => { return state.loggedIn },

		getContacts: (state) => { return state.contacts },
		getContactsCount: (state) => { return state.contacts.length },

		getGroups: (state) => { return state.groups },
		getGroupsCount: (state) => { return state.groups.length },

		getContactsById: state => {
			return (idsList: number[]) => state.contacts.filter(message => (idsList.includes(message['contactid']) === true))
		},
	},
	mutations: {
		setLoginStatus: (state, flag: boolean) => { state.loggedIn = flag },
		setLoggedUser: (state, loginObj: object) => {
			state.loggedUser = loginObj;
		},
		setContact: (state, contact: object) => {
			state.contacts.push(contact)
		},
		setGroup: (state, group: object) => {
			state.groups.push(group)
		},
	},
	actions: {},
})