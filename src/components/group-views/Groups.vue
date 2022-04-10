<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapState } from 'vuex'
import UpdateGroup from './UpdateGroup.vue'
import GroupsList from './GroupsList.vue'

export default defineComponent({
	methods: {
		...mapGetters('contactState', {
			getContactsCount: "getContactsCount",
		}),
	},
	components: { UpdateGroup, GroupsList }
})
</script>

<template>
	<div class="groups-container mt-4 mb-1">
		<div class="row">
			<p class="col-lg-12 text-right">
				You have
				<b>{{ getContactsCount() }}</b> Contacts
				<router-link to="/user/contacts">
					<button type="button" class="btn btn-primary btn-sm router-anchor">Manage Contacts</button>
				</router-link>
			</p>
		</div>

		<UpdateGroup></UpdateGroup>
		<GroupsList></GroupsList>
	</div>
</template>

<style scoped>
</style>