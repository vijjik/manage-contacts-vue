<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
	// type inference enabled
	props: {
		name: String
	},
	data() {
		return {
			username: 'someone@inmar.com',
			password: 'some',
			submitted: false,
		}
	},
	computed: {
		...mapGetters('userState', {
			authentiCateLogn: 'authentiCateLogn'
		})
	},
	methods: {
		...mapMutations('userState', {
			setLoginStatus: 'setLoginStatus'
		}),
		handleSubmit() {
			this.submitted = true;
			const { username, password } = this;
			if (username && password) {
				console.log(this.authentiCateLogn(username, password));
				if (this.authentiCateLogn(username, password)) {
					this.setLoginStatus(true);
					this.$router.push({ name: 'user', params: { 'userId': username } })
				}
				else {
					alert('User Not Fount, Please Register');
				}
			}
		}
	},
})
</script>

<template>
	<div class="row signin-wrapper justify-content-md-center pt-5 pb-5">
		<form @submit.prevent="handleSubmit" class="col-xs-12 col-lg-6 border border-info rounded p-3">
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
