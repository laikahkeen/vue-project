<script setup>
import Navigation from "./components/Navigation.vue";
</script>

<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
		<div class="container-fluid">
			<router-link to="/" class="navbar-brand link-body-emphasis">
				<i class="bi pe-none me-2 bi-bootstrap"></i>
				<span class="fs-5 fw-semibold">Vue Project</span>
			</router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
				<div class="navbar-nav">
					<router-link to="/" class="nav-link">Home</router-link>
					<router-link to="/" class="nav-link">Link</router-link>
					<div class="dropdown">
						<button class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Dropdown</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Action</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li><hr class="dropdown-divider" /></li>
							<li><a class="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
					<router-link to="/" class="nav-link">Disabled</router-link>
				</div>
				<form @submit.prevent="" class="d-flex">
					<input type="text" name="" id="" class="form-control me-2" />
					<button type="submit" class="btn btn-outline-primary">Search</button>
				</form>
			</div>
		</div>
	</nav>
	<Navigation />
	<main>
		<router-view></router-view>
	</main>
</template>

<style scoped></style>
