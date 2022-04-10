<script setup lang="ts">
</script>

<template>
	<div class="container app-wrapper">
		<div class="row">
			<div class="col-xs-12 col-lg-12">
				<header>
					<h1>Empolyee Contacts Managing Tool</h1>
				</header>
				<main role="main">
					<router-view></router-view>
				</main>
				<footer role="contentinfo">
					<p>Footer content</p>
				</footer>
			</div>
		</div>
	</div>
</template>

<style>
.app-wrapper {
	background: #cdddcd;
}
header,
footer {
	background-color: #18125e;
	color: #fff;
	padding: 20px;
	font-weight: 400;
	font-size: 2rem;
}
main {
	min-height: 400px;
}
</style>
