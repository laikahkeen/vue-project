<template>
	<div>this is the children</div>
	<div>{{ $route.params.children }}</div>
	<div>{{ task }}</div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const selectedData = route.params.children;
const task = ref("selectedData");
</script>

<style lang="scss" scoped></style>
