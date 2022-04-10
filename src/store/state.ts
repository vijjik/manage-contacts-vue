import { createStore } from 'vuex'
import { userState } from './userstore'
import { contactState } from './contactstore'
import { groupState } from './groupstore'

export const store = createStore({
	modules: {
		userState,
		contactState,
		groupState
	}
})