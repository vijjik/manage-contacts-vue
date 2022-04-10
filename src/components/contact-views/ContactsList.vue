<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
	props: {
		contactsList: Array,
		default: [],
	},
	methods: {
		...mapGetters('contactState', {
			getContactsCount: "getContactsCount"
		}),
	}
})
</script>

<template>
	<div class="contactlist-wrapper border border-info mb-3 p-3 rounded">
		<h5 class="text-secondary">
			Contacts List
			<b>({{ getContactsCount() }})</b>
		</h5>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">First Name</th>
					<th scope="col">Last Name</th>
					<th scope="col">Phone Number</th>
				</tr>
			</thead>
			<tbody>
				<tr class="text-center m-3" v-if="contactsList && contactsList.length === 0">
					<td colspan="4">Contacts List is Empty</td>
				</tr>
				<tr v-for="(contact, index) in contactsList">
					<th scope="row">{{ index + 1 }}</th>
					<td>{{ contact.firstname }}</td>
					<td>{{ contact.lastname }}</td>
					<td>{{ contact.phone }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style scoped>
</style>
