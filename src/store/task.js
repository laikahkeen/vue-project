import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useTasksStore = defineStore("tasks", () => {
	const list = ref(getTask());
	const count = computed(() => list.value.length);
	const taskId = ref(getTaskNo());

	function getTask() {
		const object = localStorage.getItem("tasks");
		return object ? JSON.parse(object) : {};
	}

	function getTaskNo() {
		const taskId = localStorage.getItem("taskId");
		return taskId ?? 0;
	}

	function addTask(taskName, taskDescription) {
		taskId.value++;
		list.value[taskId.value] = { taskName, taskDescription, createdAt: new Date() };
	}

	function updateTask(taskId, taskName, taskDescription) {
		if (list.value[taskId] === undefined) return;
		const curr = list.value[taskId];
		list.value[taskId] = { ...curr, taskName, taskDescription };
	}

	watch(taskId, (newId) => {
		localStorage.setItem("taskId", newId);
	});

	watch(
		list,
		(newList) => {
			localStorage.setItem("tasks", JSON.stringify(newList));
		},
		{ deep: true }
	);

	return { list, count, taskId, getTaskNo, getTask, addTask, updateTask };
});
