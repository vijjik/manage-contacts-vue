<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'

export default defineComponent({
	// type inference enabled
	props: {
		name: String
	},
	data() {
		// return {
		// 	username: 'someone@inmar.com',
		// 	firstname: 'someone',
		// 	lastname: 'somelast',
		// 	aadhar: '121212121212',
		// 	password: 'some',
		// 	submitted: false,
		// 	domainName: '@inmar.com',
		// 	registeSuccess: false,
		// }
		return {
			username: '',
			firstname: '',
			lastname: '',
			aadhar: '',
			password: '',
			submitted: false,
			domainName: '@inmar.com',
			registeSuccess: false,
		}
	},
	methods: {
		...mapMutations('userState', {
			setLoggedUser: 'setLoggedUser' // map `this.setLogin()` to `this.$store.commit('increment')`
		}),
		signup() {
			this.submitted = true;
			if (this.username && this.lastname && this.password && !this.validateAadhar() && !this.validateEmail()) {
				this.setLoggedUser(
					{
						username: this.username,
						firstname: this.firstname,
						lastname: this.lastname,
						aadhar: this.aadhar,
						password: this.password,
					}
				);
				this.registeSuccess = true;
			}
		},
		validateEmail() {
			let show = false;
			if (this.submitted) {
				show = !this.username ? true : false;
				if (this.username) {
					show = (this.username.indexOf(this.domainName) == -1) ? true : false;
				}
			}
			return show;
		},
		validateAadhar() {
			let show = false;
			if (this.submitted) {
				show = !this.aadhar ? true : false;
				if (this.aadhar) {
					show = (this.aadhar.length != 12 || !parseInt(this.aadhar)) ? true : false;
				}
			}
			return show;
		}
	}
})
</script>

<template>
	<div class="row signup-wrapper justify-content-md-center pt-5 pb-5">
		<form
			v-if="!registeSuccess"
			@submit.prevent="signup"
			class="col-xs-12 col-lg-6 border border-info rounded p-3"
		>
			<div class="form-group">
				<label for="firstname">First Name</label>
				<input
					type="text"
					placeholder="Enter First Name"
					v-model="firstname"
					name="firstname"
					class="form-control"
					:class="{ 'is-invalid': submitted && !firstname }"
				/>
				<div v-show="submitted && !firstname" class="invalid-feedback">First Name is Required</div>
			</div>
			<div class="form-group">
				<label for="lastname">Last Name</label>
				<input
					type="text"
					placeholder="Enter Last Name"
					v-model="lastname"
					name="lastname"
					class="form-control"
					:class="{ 'is-invalid': submitted && !lastname }"
				/>
				<div v-show="submitted && !lastname" class="invalid-feedback">Last Name is Required</div>
			</div>
			<div class="form-group">
				<label for="aadhar">Aadhar Number</label>
				<input
					type="text"
					placeholder="Enter 12-Digit Aadhar Number"
					v-model="aadhar"
					name="aadhar"
					class="form-control"
					:class="{ 'is-invalid': validateAadhar() }"
				/>
				<div
					v-show="validateAadhar()"
					class="invalid-feedback"
				>Aadhar Number is Invalid(format:12-digit number)</div>
			</div>
			<div class="form-group">
				<label for="username">Email</label>
				<input
					type="email"
					placeholder="username@inmar.com"
					v-model="username"
					name="username"
					class="form-control"
					:class="{ 'is-invalid': validateEmail() }"
				/>
				<div
					v-show="validateEmail()"
					class="invalid-feedback"
				>Email is invalid (use format: username{{ domainName }})</div>
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input
					type="password"
					v-model="password"
					placeholder="Enter password"
					name="password"
					class="form-control"
					:class="{ 'is-invalid': submitted && !password }"
				/>
				<div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
			</div>
			<div class="form-group text-center">
				<button class="btn btn-primary">Register</button>
			</div>
		</form>
		<div v-if="registeSuccess" class="col-lg-6">
			<div class="alert alert-primary" role="alert">
				Registration Successful!
				<router-link to="/signin">Login Here</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>
