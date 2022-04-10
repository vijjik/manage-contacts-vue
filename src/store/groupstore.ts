const state = {
	// groups: [],
	groups: [
		{ 'groupname': 'Default', 'groupid': 1, 'groupactive': false, 'contacts': [] },
		{ 'groupname': 'Group1', 'groupid': 2, 'groupactive': false, 'contacts': [] }
	]
};
const mutations = {
	setGroup: (state: { groups: object[]; }, group: object) => {
		state.groups.push(group)
	},
};
const getters = {
	getGroups: (state: { groups: any; }) => { return state.groups },
	getGroupsCount: (state: { groups: string | any[]; }) => { return state.groups.length },
};

export const groupState = {
	namespaced: true,
	state,
	mutations,
	getters,
};