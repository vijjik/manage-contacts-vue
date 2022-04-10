<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapState } from 'vuex'
import ContactsList from './ContactsList.vue';
import CreateContact from './CreateContact.vue';

export default defineComponent({
	computed: {
		...mapState('contactState', {
			userContacts: 'contacts', // passing the string value is the same as state => state.contacts
		}),
	},
	components: { ContactsList, CreateContact },
	created() {
		// console.log('this.getContacts', this.getContacts);
	},
	methods: {
		...mapGetters('contactState', {
			getContactsCount: "getContactsCount"
		}),
	}
})
</script>

<template>
	<div class="contacts-wrapper mt-3 mb-1">
		<div class="row mb-2">
			<!-- <p class="col-lg-8">
				Currently
				<b>{{ getContactsCount() }}</b> contacts available
			</p>-->
			<div class="col-lg-12 text-right">
				<router-link to="/user/groups">
					<button type="button" class="btn btn-primary btn-sm router-anchor">Manage Groups</button>
				</router-link>
			</div>
		</div>

		<CreateContact></CreateContact>
		<ContactsList :contacts-list="userContacts" />
	</div>
</template>

<style scoped>
</style>
