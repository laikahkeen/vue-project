<script setup>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import { Suspense } from "vue";
</script>

<template>
	<Navbar />
	<Suspense>
		<main
			style="height: calc(100vh - 47px); margin-top: 47px"
			class="d-flex">
			<Sidebar />
			<router-view style="max-width: 768px"></router-view>
		</main>
	</Suspense>
</template>

<style scoped></style>
