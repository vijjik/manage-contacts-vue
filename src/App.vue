<script setup lang="ts">
import Register from "./components/SignUp.vue";
</script>

<template>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<img alt="Vue logo" class="logo col-xs-2" src="./assets/logo.svg" width="125" height="125" />
					<h1 class="col-xs-10">Empolyee Contacts Managing Tool</h1>
				</div>
			</div>
		</div>
	</header>

	<main role="main">
		<div class="jumbotron">
			<div class="container">
				<Register />
			</div>
		</div>
	</main>

	<footer role="contentinfo">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">Footer content</div>
			</div>
		</div>
	</footer>
</template>

<style>
@import "./assets/base.css";
</style>
