import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

const category = "tasks";

export const useTasksStore = defineStore(category, () => {
	const list = ref(getList());
	const listCount = computed(() => Object.values(list.value).length);
	const newId = ref(getNewId());

	function getList() {
		const object = localStorage.getItem(category);
		return JSON.parse(object) ?? {};
	}

	function getNewId() {
		const newId = localStorage.getItem("newId");
		return JSON.parse(newId) ? JSON.parse(newId)[category] ?? 0 : 0;
	}

	function createItem(name, description, order, sectionId) {
		newId.value++;
		list.value[newId.value] = {
			name,
			description,
			order,
			sectionId,
			createdAt: new Date(),
		};
	}

	function updateItem(id, name, description) {
		if (list.value[id] === undefined) return;
		const curr = list.value[id];
		list.value[id] = { ...curr, name, description };
	}

	function updateSectionId(id, sectionId) {
		if (list.value[id] === undefined) return;
		const curr = list.value[id];
		list.value[id] = { ...curr, sectionId };
	}

	function updateListOrder(sectionId, index) {
		let section = Object.entries(list.value)
			.map(([key, value]) => {
				return { ...value, id: key };
			})
			.filter((task) => task.sectionId === sectionId);
		section.sort((a, b) => a.order - b.order);
		section.forEach((task, index) => {
			let taskInState = list.value[task.id];
			if (taskInState) {
				taskInState.order = index + 1;
			}
		});
	}

	function moveTaskBetweenSection(taskId, fromSectionId, toSectionId, oldIndex, newIndex) {
		const targetTask = list.value[taskId];
		if (targetTask) {
			// updateListOrder(fromSectionId, oldIndex);

			for (let item in list.value) {
				if (item == taskId) continue;
				let task = list.value[item];
				if (task.sectionId == fromSectionId && task.order >= oldIndex + 1) {
					task.order -= 1;
				} else if (task.sectionId == toSectionId && task.order >= newIndex + 1) {
					task.order += 1;
				}
			}

			targetTask.sectionId = toSectionId != 0 ? toSectionId : null;
			// targetTask.order = newIndex + 1;
			// updateListOrder(toSectionId, newIndex);
		}
	}

	watch(newId, (newId) => {
		let newObject = JSON.parse(localStorage.getItem("newId"));
		localStorage.setItem("newId", JSON.stringify({ ...newObject, [category]: newId }));
	});

	watch(
		list,
		(newList) => {
			localStorage.setItem(category, JSON.stringify(newList));
		},
		{ deep: true }
	);

	return {
		list,
		listCount,
		newId,
		getNewId,
		getList,
		createItem,
		updateItem,
		updateSectionId,
		updateListOrder,
		moveTaskBetweenSection,
	};
});
