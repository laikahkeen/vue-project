import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

const category = "sections";

export const useSectionsStore = defineStore(category, () => {
	const list = ref(getList());
	const listCount = computed(() => list.value.length);
	const newId = ref(getNewId());

	function getList() {
		const object = localStorage.getItem(category);
		return JSON.parse(object) ?? {};
	}

	function getNewId() {
		const newId = localStorage.getItem("newId");
		return JSON.parse(newId) ? JSON.parse(newId)[category] ?? 0 : 0;
	}

	function createItem(name, order) {
		newId.value++;
		list.value[newId.value] = {
			name,
			order,
			createdAt: new Date(),
		};
	}

	function updateItem(id, name) {
		if (list.value[id] === undefined) return;
		const curr = list.value[id];
		list.value[id] = { ...curr, name };
	}

	function updateListOrder(newArr) {
		newArr.forEach((item, i) => {
			if (list.value[item.id] === undefined) return;
			list.value[item.id].order = i + 1;
		});
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
		updateListOrder,
	};
});
