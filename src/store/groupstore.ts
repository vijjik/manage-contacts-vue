const state = {
	groups: [],
	// groups: [
	// 	{ 'groupname': 'Default', 'groupid': 1, 'groupactive': false, 'contacts': [2, 1] },
	// 	{ 'groupname': 'Group1', 'groupid': 2, 'groupactive': false, 'contacts': [1, 4] }
	// ]
};
const mutations = {
	setGroup: (state: { groups: object[]; }, group: object) => {
		state.groups.push(group)
	},

	addContactsToGroup: (state: { groups: object[]; }, payload: object) => {
		const groupIndex = payload.groupIndex;
		const latestContacts = payload.selContacts;
		const existingContacts = state.groups[groupIndex]['contacts'];
		const finalContacts = [];
		if (existingContacts && existingContacts.length) {
			const finalContacts = existingContacts.concat(latestContacts);
			state.groups[groupIndex]['contacts'] = finalContacts
		} else {
			state.groups[groupIndex]['contacts'] = latestContacts
		}
		console.log(state.groups[groupIndex]['contacts'])
	},
};
const getters = {
	getGroups: (state: { groups: any; }) => { return state.groups },
	getGroupsCount: (state: { groups: string | any[]; }) => { return state.groups.length },
	getGroupContactIds: (state: { groups: any[]; }) => (id: number) => {
		const groupVal = state.groups.find(group => (group.groupid === id))
		return groupVal.contacts;
	},
	getGroupIndexFromGrpID: (state: { groups: any[]; }) => (grpid: number) => {
		return state.groups.findIndex((group) => (group.groupid === grpid))
	},
};

export const groupState = {
	namespaced: true,
	state,
	mutations,
	getters,
};