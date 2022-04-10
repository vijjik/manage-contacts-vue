<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
	data() {
		return {
			currentContact: {
				firstname: '',
				lastname: '',
				phone: ''
			}
		};
	},
	methods: {
		...mapGetters('contactState', {
			getContactsCount: "getContactsCount"
		}),
		...mapMutations('contactState', {
			setContact: "setContact"
		}),
		createContact() {
			if (this.currentContact.firstname && this.currentContact.phone) {
				this.currentContact.contactid = (this.getContactsCount() + 1)
				this.setContact(this.currentContact);
				this.currentContact = {};
			}
		},
	},
})
</script>

<template>
	<div class="createcontact-container border border-info mb-3 p-3 rounded">
		<h5 class="text-secondary">Update Contact</h5>
		<form @submit.prevent="createContact">
			<div class="row">
				<div class="col">
					<input
						type="text"
						v-model="currentContact.firstname"
						class="form-control"
						placeholder="First name"
						required
					/>
				</div>
				<div class="col">
					<input
						type="text"
						v-model="currentContact.lastname"
						class="form-control"
						placeholder="Last name"
					/>
				</div>
				<div class="col">
					<input
						type="tel"
						v-model="currentContact.phone"
						class="form-control"
						placeholder="Phone"
						required
						pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
					/>
					<small>Format: 1234-454-678</small>
				</div>
				<div class="col">
					<button type="submit" class="btn btn-primary btn-sm mt-1">Create Contact</button>
				</div>
			</div>
		</form>
	</div>
</template>

<style scoped>
</style>
