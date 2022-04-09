<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	// type inference enabled
	props: {
		name: String
	},
	methods: {
		handleSubmit() {
			console.log('inside submit');
		}
	}
})
</script>

<template>
	<div class="signin-wrapper">
		<form>
			<div class="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input
					type="text"
					pattern="[A-Za-z]{3}"
					class="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
				/>
				<small
					id="emailHelp"
					class="form-text text-muted"
				>We'll never share your email with anyone else.</small>
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input type="password" class="form-control" id="exampleInputPassword1" />
			</div>
			<div class="form-group form-check">
				<input type="checkbox" class="form-check-input" id="exampleCheck1" />
				<label class="form-check-label" for="exampleCheck1">Check me out</label>
			</div>
			<button type="submit" class="btn btn-primary" @submit.prevent="handleSubmit">Sign In</button>
		</form>
	</div>
</template>

<style scoped>
</style>
