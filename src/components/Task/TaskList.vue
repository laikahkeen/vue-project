<template>
	<draggableComponent
		class="list-group list-group-flush"
		tag="ul"
		group="task"
		v-model="tasksArr"
		item-key="id"
		:data-id="prop.section ? prop.section.id : 0"
		@end="updateTaskOrder">
		<template #item="{ element }">
			<TaskItem :task="element" :data-id="element.id" />
		</template>
		<template #footer>
			<AddTaskItem :section="section" />
		</template>
	</draggableComponent>
</template>

<script setup>
import draggableComponent from "vuedraggable";
import TaskItem from "./TaskItem.vue";
import AddTaskItem from "./AddTaskItem.vue";
import { useTasksStore } from "../../store/tasks";
import { ref, watch } from "vue";

const prop = defineProps({
	section: Object,
});

const tasks = useTasksStore();
function objToArr(list) {
	return Object.entries(list)
		.map(([key, value]) => {
			return { ...value, id: key };
		})
		.filter((task) => {
			if (prop.section) return task.sectionId === prop.section.id;
			return task.sectionId === null;
		})
		.sort((a, b) => a.order - b.order);
}
const tasksArr = ref(objToArr(tasks.list));

watch(tasks.list, (newList) => {
	tasksArr.value = objToArr(newList);
});

function updateTaskOrder(e) {
	const taskId = e.item.dataset.id;
	const fromSectionId = e.from.dataset.id;
	const toSectionId = e.to.dataset.id;
	const newIndex = e.newIndex;
	tasks.moveTaskBetweenSection(taskId, fromSectionId, toSectionId, newIndex);
}
</script>

<style lang="scss" scoped></style>
