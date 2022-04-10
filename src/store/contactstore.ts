const state = {
	// contacts: [
	// 	{ 'contactid': 1, 'firstname': 'Contact - 1', 'lastname': 'contact-ls-1', 'phone': '132313' },
	// 	{ 'contactid': 2, 'firstname': 'Contact - 2', 'lastname': 'contact-ls-2', 'phone': '9923232323' },
	// 	{ 'contactid': 3, 'firstname': 'Contact - 3', 'lastname': 'contact-ls-3', 'phone': '57567' },
	// 	{ 'contactid': 4, 'firstname': 'Contact - 4', 'lastname': 'contact-ls-4', 'phone': '345345' },
	// ],
	contacts: [],
};
const mutations = {
	setContact: (state: { contacts: object[]; }, contact: object) => {
		state.contacts.push(contact)
	},
};
const getters = {
	getContactsCount: (state: { contacts: string | any[]; }) => { return state.contacts.length },
	getContactsById: (state: { contacts: any[]; }) => (idsList: number[]) => {
		return state.contacts.filter(contact => (idsList.includes(contact['contactid'])))
	},
};

export const contactState = {
	namespaced: true,
	state,
	mutations,
	getters,
};