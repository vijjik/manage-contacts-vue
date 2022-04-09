<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		contactsList: Array,
		default: [],
	},
})
</script>

<template>
	<div class="container">
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
					<td colspan="4">No Contacts created Yet!</td>
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
