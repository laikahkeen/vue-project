<template>
	<ul>
		<NavigationItem v-for="model in navigationData" :model="model" />
	</ul>
</template>

<script setup>
import NavigationItem from "./NavigationItem.vue";
import { routes } from "../router";
import { ref } from "vue";

const navigationData = ref(routes);
</script>

<style scoped></style>
