<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import ContactsList from '../contact-views/ContactsList.vue'

export default defineComponent({
	props: {
		groupList: Array,
		default: null,
	},
	data() {
		return {
			selectedContacts: [],
		};
	},
	methods: {
		...mapGetters({
			getGroups: "getGroups",
			getContacts: "getContacts"
		}),
	},
	created() {
	},
	components: { ContactsList }
})
</script>

<template>
	<div class="groups-list" v-if="groupList && groupList.length">
		<ul class="nav nav-tabs" id="myTab" role="tablist">
			<li class="nav-item" role="presentation" v-for="({ groupname, groupid }, index) in groupList">
				<div>
					<a
						class="nav-link"
						:class="(index == 0) ? 'active' : ''"
						data-toggle="tab"
						:href="'#tab-' + groupid"
						role="tab"
					>{{ groupname }}</a>
					<i class="bi bi-gear"></i>
				</div>
			</li>
		</ul>
		<div class="tab-content mb-3" id="myTabContent">
			<div
				v-for="({ groupid }, index) in groupList"
				class="tab-pane fade"
				:class="(index == 0) ? ' show active' : ''"
				:id="'tab-' + groupid"
				role="tabpanel"
			>
				<ContactsList :contacts-list="getContacts()"></ContactsList>
			</div>
		</div>
	</div>
	<div v-else>
		<div class="alert alert-primary" role="alert">No Groups Created Yet! Click on Create Groups</div>
	</div>
</template>

<style>
@import "@vueform/multiselect/themes/default.css";
</style>
<style scoped>
</style>