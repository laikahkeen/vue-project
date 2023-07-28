<template>
	<li class="list-group-item list-group-item-action btn rounded-0">
		<i class="bi bi-circle me-2"></i>
		<span class="fs-7">{{ task.taskName }}</span>
	</li>
</template>

<script setup>
const prop = defineProps({
	task: Object,
});
</script>

<style lang="scss" scoped></style>
