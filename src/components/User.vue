<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
	data() {
		return {
			groups: [],
		};
	},
	methods: {
		...mapGetters({
			getGroups: "getGroups",
			getContactsCount: "getContactsCount"
		})
	},
})
</script>

<template>
	<router-view></router-view>
</template>

<style scoped>
.router-anchor a {
	color: #fff;
	text-decoration: none;
}
</style>
