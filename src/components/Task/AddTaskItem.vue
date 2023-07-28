<template>
	<li v-if="!isAddingTask" @click="toggleAddTask" class="btn rounded-0 list-group-item list-group-item-action">
		<i class="bi bi-plus-lg me-2"></i>
		<span class="fs-7">Add task</span>
	</li>
	<div v-if="isAddingTask" class="card mt-2">
		<form @submit.prevent="handleAddTask">
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
import { useTasksStore } from "../../store/task";

const tasks = useTasksStore();
const isAddingTask = ref(false);
const taskName = ref("");
const taskDescription = ref("");

function toggleAddTask() {
	isAddingTask.value = !isAddingTask.value;
}

function handleAddTask() {
	toggleAddTask();
	tasks.addTask(taskName.value, taskDescription.value);
	taskName.value = taskDescription.value = "";
}
</script>

<style lang="scss" scoped></style>
