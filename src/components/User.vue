<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
	data() {
		return {
			groups: [],
		}
	},
	methods: {
		...mapGetters({
			getGroupsData: 'getGroups',
			getContactsInGroup: 'getContactsInGroup'
		}),
		getContactsCount: function (gid) {
			this.getContactsInGroup(gid).length;
		},
	},
	created() {
		this.groups = this.getGroupsData();
	},
})
</script>

<template>
	<div class="container">
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
			<div
				v-for="({ grpname, grpid }, index) in groups"
				class="tab-pane fade"
				:class="(index == 0) ? ' show active' : ''"
				:id="'tab-' + grpid"
				role="tabpanel"
			>{{ grpname }}</div>
		</div>
	</div>
</template>

<style scoped>
</style>
