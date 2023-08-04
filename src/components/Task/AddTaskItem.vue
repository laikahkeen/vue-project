<template>
	<li v-if="!isAddingTask" @click="toggleAddTask" class="btn rounded-0 list-group-item list-group-item-action">
		<i class="bi bi-plus-lg me-2"></i>
		<span class="fs-7">Add task</span>
	</li>
	<EditTaskItem v-else @finishEdit="toggleAddTask" :section="section" />
</template>

<script setup>
import { ref } from "vue";
import EditTaskItem from "./EditTaskItem.vue";

const prop = defineProps({
	section: Object,
});

const isAddingTask = ref(false);

function toggleAddTask() {
	isAddingTask.value = !isAddingTask.value;
}
</script>

<style lang="scss" scoped></style>
