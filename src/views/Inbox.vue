<template>
	<div class="container-fluid">
		<div class="d-flex justify-content-between px-5 pt-4">
			<h5>Inbox</h5>
			<div>
				<button class="btn btn-sm btn-light mx-1"><i class="bi bi-sliders me-2"></i>View</button>
				<button class="btn btn-sm btn-light mx-1"><i class="bi bi-chat me-2"></i>Comments</button>
				<button class="btn btn-sm btn-light mx-1"><i class="bi bi-three-dots"></i></button>
			</div>
		</div>
		<div class="px-5 pt-4">
			<div class="d-flex flex-column">
				<ul class="list-group list-group-flush">
					<TaskItem v-for="task in tasks" :task="task" :tasks="tasks" />
					<AddTaskItem />
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
import TaskItem from "../components/Task/TaskItem.vue";
import AddTaskItem from "../components/Task/AddTaskItem.vue";
import { ref } from "vue";
const tasks = ref(JSON.parse(localStorage.getItem("task")) ?? []);
</script>

<style lang="scss" scoped></style>
