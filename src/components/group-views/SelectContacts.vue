<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapState, mapMutations } from 'vuex'
import Multiselect from '@vueform/multiselect'

export default defineComponent({
	props: {
		groupId: Number
	},
	data() {
		return {
			selectedContacts: [],
		}
	},
	computed: {
		...mapState('contactState', {
			userContacts: 'contacts', // passing the string value is the same as state => state.contacts
		}),
		...mapGetters('groupState', {
			getGroupIndexFromGrpID: 'getGroupIndexFromGrpID',
		}),
	},
	methods: {
		...mapMutations('groupState', {
			addContactsToGroup: 'addContactsToGroup',
		}),
		updateGroupContacts() {
			const cuurentGrpID = this.groupId;
			const groupIndex = this.getGroupIndexFromGrpID(cuurentGrpID)
			if ((groupIndex || groupIndex === 0) && this.selectedContacts && this.selectedContacts.length) {
				const payload = {
					'groupIndex': groupIndex,
					'selContacts': this.selectedContacts
				}
				this.addContactsToGroup(payload)
				this.selectedContacts = [];
				this.updateContactsListDom();
			}
		},
		updateContactsListDom() {
			if (document && document.querySelector('#myTab .nav-link.active')) { // hack need to update from parent component
				document.querySelector('#myTab .nav-link.active').click();
			}
		}
	},
	components: { Multiselect }
})
</script>

<template>
	<div class="mt-2 mb-2">
		<h6>Select Contacts for the group</h6>
		<div class="mb-2 row">
			<div class="col-lg-6">
				<Multiselect
					v-model="selectedContacts"
					mode="tags"
					:searchable="true"
					:createTag="true"
					valueProp="contactid"
					trackBy="firstname"
					label="firstname"
					:options="userContacts"
				></Multiselect>
			</div>
			<div class="col-lg-3">
				<button
					type="button"
					class="btn btn-primary btn-sm mt-1"
					@click="updateGroupContacts"
				>Add Contact</button>
			</div>
		</div>
	</div>
</template>

<style>
@import "@vueform/multiselect/themes/default.css";
</style>
<style scoped>
</style>