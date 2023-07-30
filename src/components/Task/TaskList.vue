<template>
	<draggableComponent
		class="list-group list-group-flush"
		tag="ul"
		group="task"
		v-model="tasksArr"
		item-key="id"
		@end="updateTaskOrder">
		<template #item="{ element }">
			<TaskItem :task="element" />
		</template>
		<template #footer>
			<AddTaskItem />
		</template>
	</draggableComponent>
</template>

<script setup>
import draggableComponent from "vuedraggable";
import TaskItem from "./TaskItem.vue";
import AddTaskItem from "./AddTaskItem.vue";
import { useTasksStore } from "../../store/tasks";
import { ref, watch } from "vue";

const tasks = useTasksStore();
function objToArr(list) {
	return Object.entries(list)
		.map(([key, value]) => {
			return { ...value, id: key };
		})
		.sort((a, b) => a.order - b.order);
}
const tasksArr = ref(objToArr(tasks.list));

watch(tasks.list, (newList) => {
	tasksArr.value = objToArr(newList);
});

function updateTaskOrder() {
	tasks.updateListOrder(tasksArr.value);
}
</script>

<style lang="scss" scoped></style>
