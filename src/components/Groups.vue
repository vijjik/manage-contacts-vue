<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import ContactsList from './contact-views/ContactsList.vue';

export default defineComponent({
	data() {
		return {
			groups: [],
		};
	},
	methods: {
		...mapGetters({
			getGroupsData: "getGroups",
			getContactsCount: "getContactsCount",
			getContacts: "getContacts"
		}),
	},
	created() {
		this.groups = this.getGroupsData();
	},
	components: { ContactsList }
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
			<!-- <div
				v-for="({ grpname, grpid }, index) in groups"
				class="tab-pane fade"
				:class="(index == 0) ? ' show active' : ''"
				:id="'tab-' + grpid"
				role="tabpanel"
			>{{ grpname }}</div>-->
			<ContactsList :contacts-list="getContacts()" />
		</div>
	</div>
</template>

<style scoped>
</style>
