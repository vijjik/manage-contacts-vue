<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import UpdateGroup from './UpdateGroup.vue'
import GroupsList from './GroupsList.vue'

export default defineComponent({
	data() {
		return {
			openGroupForm: false,
			currentGroup: {},
		};
	},
	methods: {
		...mapGetters({
			getContactsCount: "getContactsCount",
			getGroups: "getGroups",
		}),
		createGroup() {
			this.openGroupForm = true;
			this.currentGroup = {};
		}
	},
	components: { UpdateGroup, GroupsList }
})
</script>

<template>
	<div class="groups-container">
		<div class="row">
			<div class="col-3">
				<button
					type="button"
					class="btn btn-primary btn-sm router-anchor float-end"
					@click="createGroup"
				>Create Group</button>
			</div>
			<p class="col-lg-8">
				You have
				<b>{{ getContactsCount() }}</b> Contacts Currently,
				<router-link to="/user/contacts">
					<button type="button" class="btn btn-primary btn-sm router-anchor">Manage Contacts</button>
				</router-link>
			</p>
		</div>

		<UpdateGroup :group-data="currentGroup" v-show="openGroupForm"></UpdateGroup>
		<GroupsList :group-list="getGroups()"></GroupsList>
	</div>
</template>

<style scoped>
</style>