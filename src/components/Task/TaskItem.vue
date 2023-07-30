<template>
	<li
		v-if="!isEditingTask"
		@click="toggleEditTask"
		class="list-group-item list-group-item-action btn rounded-0">
		<i class="bi bi-circle me-2"></i>
		<span class="fs-7">{{ task.name }} - {{ task.description }}</span>
	</li>
	<EditTaskItem v-else @finishEdit="toggleEditTask" :task="task" />
</template>

<script setup>
import { ref } from "vue";
import EditTaskItem from "./EditTaskItem.vue";

const isEditingTask = ref(false);

function toggleEditTask() {
	isEditingTask.value = !isEditingTask.value;
}

const prop = defineProps({
	task: Object,
});
</script>

<style lang="scss" scoped></style>
