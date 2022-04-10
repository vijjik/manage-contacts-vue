<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
	props: {
		groupData: Object,
		default: null,
	},
	data() {
		return {
			currentGroup: {
				groupName: '',
				activeFlag: true,
				groupID: null,
			},
		};
	},
	methods: {
		...mapGetters({
			getGroupsCount: "getGroupsCount"
		}),
		...mapMutations({
			setGroup: "setGroup"
		}),
		updateGroup() {
			if (this.currentGroup.groupName) {
				this.setGroup({
					'groupname': this.currentGroup.groupName,
					'groupactive': this.currentGroup.activeFlag,
					'groupid': this.getGroupsCount() + 1

				});
				this.resetCurrentGroup();
			}
		},
		resetCurrentGroup() {
			this.currentGroup = {
				groupName: '',
				activeFlag: true,
				groupID: null,
			};
		},
	},
})
</script>

<template>
	<form class="mb-3" @submit.prevent="updateGroup">
		<div class="row">
			<div class="col">
				<input
					type="text"
					v-model="currentGroup.groupName"
					class="form-control"
					placeholder="Enter Group Name"
					required
				/>
			</div>
			<div class="col">
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						id="check1"
						name="option1"
						v-model="currentGroup.activeFlag"
						checked
					/>
					<label class="form-check-label">Enable/Disable Group</label>
				</div>
			</div>
		</div>
		<button type="submit" class="btn btn-primary btn-sm mt-3">Create Contact</button>
	</form>
</template>

<style scoped>
</style>