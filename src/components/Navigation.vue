<template>
	<nav class="flex-shrink-0 p-3">
		<router-link to="/" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
			<i class="bi pe-none me-2 bi-bootstrap"></i>
			<span class="fs-5 fw-semibold">Vue Project</span>
		</router-link>
		<ul class="nav nav-pills flex-column mb-auto">
			<NavigationItem v-for="model in navigationData" :model="model" />
		</ul>
	</nav>
</template>

<script setup>
import NavigationItem from "./NavigationItem.vue";
import { routes } from "../router";
import { ref } from "vue";

const navigationData = ref(routes);
</script>

<style scoped>
nav {
	width: 280px;
	height: 100vh;
}
</style>
