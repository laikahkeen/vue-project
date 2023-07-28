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
				<draggableComponent class="list-group list-group-flush" tag="ul" v-model="tasksArr" item-key="taskId">
					<template #item="{ element }">
						<TaskItem :task="element" />
					</template>
					<template #footer>
						<AddTaskItem />
					</template>
				</draggableComponent>
			</div>
		</div>
	</div>
</template>

<script setup>
import TaskItem from "../components/Task/TaskItem.vue";
import AddTaskItem from "../components/Task/AddTaskItem.vue";
import { useTasksStore } from "../store/task";
import draggableComponent from "vuedraggable";
import { computed } from "vue";

const tasks = useTasksStore();
const tasksArr = computed(() => {
	return Object.entries(tasks.list).map(([key, value]) => {
		return { ...value, taskId: key };
	});
});

tasks.updateTask(4, "new name", "new description");

console.log(tasksArr.value);
</script>

<style lang="scss" scoped></style>
