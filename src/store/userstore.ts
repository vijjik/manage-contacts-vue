const state = {
	loggedIn: false,
	loggedUser: [],
	// loggedUser: [
	// 	{ 'username': 'someone@inmar.com', 'password': 'some', 'firstname': 'someone', 'lastname': 'somelast', 'aadhar': '121212121212' }
	// ],
};
const mutations = {
	setLoginStatus: (state: { loggedIn: boolean; }, flag: boolean) => { state.loggedIn = flag },
	setLoggedUser: (state: { loggedUser: object[]; }, loginObj: object) => {
		state.loggedUser.push(loginObj)
	},
};
const getters = {
	getLoginStatus: (state: { loggedIn: any; }) => { return state.loggedIn },

	authentiCateLogn: (state: { loggedUser: any[]; }) => (username: any, password: any) => {
		return state.loggedUser.find(user => (user.username === username && user.password === password))
	},
};

export const userState = {
	namespaced: true,
	state,
	mutations,
	getters,
};