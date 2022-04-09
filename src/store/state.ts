import { createStore } from 'vuex'

export const store = createStore({
	state: {
		loggedIn: false,
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
		getGroups: (state) => { return state.groups },
		getContactsInGroup: (state, getters) => (groupid: string) => {
			const group = getters.getGroupById(groupid);
			return group.groupcontacts;
		},
	},
	// getters: {
	// 	getEmployees: (state) => { return state.employees },
	// 	activeEmployees: (state) => { return state.employees.filter(emp => emp.active) },
	// 	getEmployeeListFromContact: (state, getters) => (contactArray: number[]) => {
	// 		const employees = getters.getEmployees;
	// 		return employees.filter((emp: { 'empid': number }) => {
	// 			const empolyeedID = emp['empid']
	// 			contactArray.includes(empolyeedID)
	// 		})
	// 	},
	// 	getEmployeesUnderGroup: (state, getters) => (groupid: string) => {
	// 		const cuurentGrp = getters.getGroupById(groupid);
	// 		if (cuurentGrp) {
	// 			const contacts = getters.getContactsInGroup(groupid);
	// 			const empolyeeList = getters.getEmployeeListFromContact(contacts)
	// 			return empolyeeList
	// 		}
	// 	},
	// 	getGroups: (state) => { return state.groups },
	// 	getGroupById: (state) => (groupid: string) => {
	// 		return state.groups.find(group => group.grpid === groupid)
	// 	},
	// 	getContactsInGroup: (state, getters) => (groupid: string) => {
	// 		const group = getters.getGroupById(groupid);
	// 		return group.groupcontacts;
	// 	},
	// },
	mutations: {},
	actions: {},
})