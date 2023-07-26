<template>
	<li v-if="!isAddingTask" @click="toggleAddTask" class="btn list-group-item list-group-item-action">
		<i class="bi bi-plus-lg me-2"></i>
		<span class="fs-7">Add task</span>
	</li>
	<div v-if="isAddingTask" class="card mt-2">
		<form @submit.prevent="createTask">
			<div class="card-body">
				<input class="form-control-plaintext" type="text" id="taskName" placeholder="Task name" v-model="taskName" />
				<input class="form-control-plaintext form-control-sm" type="text" id="description" placeholder="Description" v-model="taskDescription" />
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-between">
					<button class="btn btn-sm btn-light"><i class="bi bi-inbox me-2 text-primary"></i>Inbox</button>
					<div class="d-flex">
						<button class="btn btn-sm btn-secondary mx-1" @click="toggleAddTask">Cancel</button>
						<button type="submit" class="btn btn-sm btn-primary mx-1">Add task</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	tasks: Array,
});

const isAddingTask = ref(false);
const taskName = ref("");
const taskDescription = ref("");

function toggleAddTask() {
	isAddingTask.value = !isAddingTask.value;
}

function fetchTask() {
	return localStorage.getItem("task");
}

function createTask() {
	toggleAddTask();
	let newTask = {
		name: taskName.value,
		description: taskDescription.value,
	};
	localStorage.setItem("task", JSON.stringify([...currentTask, newTask]));
	taskName.value = taskDescription.value = "";
	console.log(currentTask);
	console.log(newTask);
}
</script>

<style lang="scss" scoped></style>
