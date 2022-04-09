<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	// type inference enabled
	props: {
		name: String
	},
	data() {
		return {
			username: '',
			password: '',
			submitted: false,
		}
	},
	methods: {
		handleSubmit(e) {
			this.submitted = true;
			const { username, password } = this;
			if (username && password) {
				this.$router.push({ name: 'user', params: { 'userId': username } })
			}
		}
	}
})
</script>

<template>
	<div class="signin-wrapper">
		<h2>Login</h2>
		<form @submit.prevent="handleSubmit">
			<div class="form-group">
				<label for="username">Email</label>
				<input
					type="email"
					pattern=".+@inmar\.com"
					placeholder="username@inmar.com"
					v-model="username"
					name="username"
					class="form-control"
					:class="{ 'is-invalid': submitted && !username }"
				/>
				<div
					v-show="submitted && !username"
					class="invalid-feedback"
				>Email is invalid (ex: username@inmar.com)</div>
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input
					type="password"
					v-model="password"
					name="password"
					class="form-control"
					:class="{ 'is-invalid': submitted && !password }"
				/>
				<div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
			</div>
			<div class="form-group">
				<button class="btn btn-primary">Login</button>
				<router-link to="/register" class="btn btn-link">SignUp Here</router-link>
			</div>
		</form>
	</div>
</template>

<style scoped>
</style>
