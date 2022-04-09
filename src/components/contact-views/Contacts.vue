<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import ContactsList from './ContactsList.vue';
import CreateContact from './CreateContact.vue';

export default defineComponent({
	methods: {
		...mapGetters({
			getContacts: "getContacts",
			getContactsCount: "getContactsCount"
		}),
	},
	components: { ContactsList, CreateContact }
})
</script>

<template>
	<div class="container">
		<p>
			Currently you have {{ getContactsCount() }} contacts,
			<router-link to="/user/groups">
				<button
					type="button"
					class="btn btn-primary btn-sm router-anchor"
					v-if="getContactsCount() > 0"
				>Manage Groups</button>
			</router-link>
		</p>

		<CreateContact></CreateContact>
		<ContactsList :contacts-list="getContacts()" />
	</div>
</template>

<style scoped>
</style>
