<template>
	<li class="list-group-item list-group-item-action">
		<i class="bi bi-circle me-2"></i>
		<span class="fs-7">{{ task.name }}</span>
	</li>
</template>

<script setup>
const prop = defineProps({
	task: Object,
});
</script>

<style lang="scss" scoped></style>
