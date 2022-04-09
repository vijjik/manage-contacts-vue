<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import ContactsList from './contact-views/ContactsList.vue';
import Multiselect from '@vueform/multiselect'

export default defineComponent({
	data() {
		return {
			groups: [],
			selectedContacts: [],
		};
	},
	methods: {
		...mapGetters({
			getContactsCount: "getContactsCount",
			getContactsById: "getContactsById",
			getContacts: "getContacts",
		}),
		addContactsToGroup() {
			console.log("Add contacts to group", this.getContactsById([1]));
		}
	},
	created() {
		this.selectedContacts = [];
	},
	components: { ContactsList, Multiselect }
})
</script>

<template>
	<div class="groups-container">
		<p>
			You have {{ getContactsCount() }} of Contacts Currently,
			<router-link to="/user/contacts">
				<button type="button" class="btn btn-primary btn-sm router-anchor">Manage Contacts</button>
			</router-link>
		</p>
		<ul class="nav nav-tabs" id="myTab" role="tablist">
			<li class="nav-item" role="presentation" v-for="({ grpname, grpid }, index) in groups">
				<a
					class="nav-link"
					:class="(index == 0) ? 'active' : ''"
					data-toggle="tab"
					:href="'#tab-' + grpid"
					role="tab"
				>{{ grpname }}</a>
			</li>
		</ul>
		<div class="tab-content" id="myTabContent">
			<div class="row">
				<div class="col-xs-4">
					<Multiselect
						v-model="selectedContacts"
						mode="tags"
						:searchable="true"
						:createTag="true"
						valueProp="contactid"
						trackBy="firstname"
						label="firstname"
						:options="[
							{ 'contactid': 1, 'firstname': 'Contact - 1', 'lastname': 'contact-ls-1', 'phone': '132313' },
							{ 'contactid': 2, 'firstname': 'Contact - 2', 'lastname': 'contact-ls-2', 'phone': '9923232323' },
							{ 'contactid': 3, 'firstname': 'acontsfsdf', 'lastname': 'contact-ls-1', 'phone': '57567' },
							{ 'contactid': 4, 'firstname': 'Contact - 1', 'lastname': 'contact-ls-2', 'phone': '345345' },
						]"
					/>
				</div>
				<div class="col-xs-2">
					<button
						type="button"
						class="btn btn-primary btn-sm mt-3"
						@click="addContactsToGroup"
					>Add Contacts</button>
				</div>
			</div>
			<p>{{ selectedContacts }}</p>
			<div
				v-for="({ grpname, grpid }, index) in groups"
				class="tab-pane fade"
				:class="(index == 0) ? ' show active' : ''"
				:id="'tab-' + grpid"
				role="tabpanel"
			>
				<ContactsList :contacts-list="getContacts()" />
			</div>
		</div>
	</div>
</template>

<style>
@import "@vueform/multiselect/themes/default.css";
</style>
<style scoped>
</style>