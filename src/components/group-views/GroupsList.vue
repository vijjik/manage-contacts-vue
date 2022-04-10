<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapState } from 'vuex'
import ContactsListVue from '../contact-views/ContactsList.vue'
import SelectContacts from './SelectContacts.vue'

export default defineComponent({
	data() {
		return {
			contactUnderGroup: [],
			selectedContacts: []
		}
	},
	computed: {
		...mapState('groupState', {
			groupList: 'groups', // passing the string value is the same as state => state.contacts
		}),
		...mapGetters('contactState', {
			getContactsById: 'getContactsById', // passing the string value is the same as state => state.contacts
		}),
		...mapGetters('groupState', {
			getGroupContactIds: 'getGroupContactIds',
		}),
	},
	methods: {
		getContactsUnderGroup(groupid: number) {
			if (groupid) {
				const contactids = this.getGroupContactIds(groupid);
				console.log(contactids);
				this.contactUnderGroup = this.getContactsById(contactids);
			}
		},
	},
	components: {
		ContactsListVue,
		SelectContacts
	},
	created() {
		if (this.groupList && this.groupList.length) {
			const firstGroupId = this.groupList[0]['groupid']
			this.getContactsUnderGroup(firstGroupId);
		}
	},
})
</script>

<template>
	<div
		class="groups-list-container border border-info mb-3 p-3 rounded"
		v-if="groupList && groupList.length"
	>
		<h5 class="text-secondary">Groups List</h5>
		<div class>
			<ul class="nav nav-tabs" id="myTab" role="tablist">
				<li class="nav-item" v-for="({ groupname, groupid }, index) in groupList">
					<a
						class="nav-link"
						:class="(index === 0 ? ' active' : '')"
						:id="'group' + (index + 1) + '-tab'"
						data-toggle="tab"
						:href="'#group' + (index + 1)"
						role="tab"
						@click="getContactsUnderGroup(groupid)"
					>{{ groupname }}</a>
				</li>
			</ul>
			<div class="tab-content border border-info mb-3 p-3 rounded" id="myTabContent">
				<div
					class="tab-pane fade"
					:class="(index === 0 ? ' show active' : '')"
					:id="'group' + (index + 1)"
					role="tabpanel"
					v-for="({ groupname, groupid }, index) in groupList"
				>
					<SelectContacts :group-id="groupid"></SelectContacts>
					<ContactsListVue :contacts-list="contactUnderGroup"></ContactsListVue>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		<div class="alert alert-primary" role="alert">
			No Groups Created Yet! Click on
			<b>Create Group</b> Button
		</div>
	</div>
</template>

<style>
@import "@vueform/multiselect/themes/default.css";
</style>
<style scoped>
.groups-list-container {
	min-height: 100px;
}
.groups-list-container .contactlist-wrapper {
	border: 0 !important;
}
</style>