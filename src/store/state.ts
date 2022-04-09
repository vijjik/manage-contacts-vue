import { createStore } from 'vuex'

export const store = createStore({
	state: {
		loggedIn: false,
		// contacts: [],
		contacts: [
			{ 'contactid': 1, 'firstname': 'Contact - 1', 'lastname': 'contact-ls-1', 'phone': '132313' },
			{ 'contactid': 2, 'firstname': 'Contact - 2', 'lastname': 'contact-ls-2', 'phone': '9923232323' },
			{ 'contactid': 3, 'firstname': 'acontsfsdf', 'lastname': 'contact-ls-1', 'phone': '57567' },
			{ 'contactid': 4, 'firstname': 'Contact - 1', 'lastname': 'contact-ls-2', 'phone': '345345' },
		],
		employees: [
			{ 'empname': 'e1', 'empid': 1, 'active': true },
			{ 'empname': 'e2', 'empid': 2, 'active': true },
			{ 'empname': 'e3', 'empid': 3, 'active': false },
		],
		groups: [
			{ 'grpname': 'group 1', 'grpid': 'g1', 'active': true, 'groupcontacts': [1, 2] },
			{ 'grpname': 'group 2', 'grpid': 'g2', 'active': true, 'groupcontacts': [1, 3] },
			{ 'grpname': 'group 3', 'grpid': 'g3', 'active': false, 'groupcontacts': [] }
		]
	},
	getters: {
		getLoginStatus: (state) => { return state.loggedIn },

		getGroups: (state) => { return state.groups },
		getContacts: (state) => { return state.contacts },

		getContactsById: state => {
			return (idsList: number[]) => state.contacts.filter(message => (idsList.includes(message['contactid']) === true))
		},
		getContactsCount: (state) => { return state.contacts.length },
	},
	mutations: {
		setLoginStatus: (state, flag: boolean) => { state.loggedIn = flag },
		setContact: (state, contact: object) => {
			console.log('contact added', contact)
			state.contacts.push(contact)
			console.log('contact added', state.contacts)
		},
	},
	actions: {},
})