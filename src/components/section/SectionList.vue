<template>
	<TaskList :section="null" />
	<AddSectionItem />
	<draggableComponent v-model="sectionsArr" item-key="id" @end="updateSectionOrder">
		<template #item="{ element }">
			<SectionItem :section="element" />
		</template>
	</draggableComponent>
</template>

<script setup>
import AddSectionItem from "./AddSectionItem.vue";
import SectionItem from "./SectionItem.vue";
import TaskList from "../Task/TaskList.vue";
import { useSectionsStore } from "../../store/sections";
import draggableComponent from "vuedraggable";
import { ref, watch } from "vue";

const sections = useSectionsStore();
function objToArr(list) {
	return Object.entries(list)
		.map(([key, value]) => {
			return { ...value, id: key };
		})
		.sort((a, b) => a.order - b.order);
}

const sectionsArr = ref(objToArr(sections.list));

watch(sections.list, (newList) => {
	sectionsArr.value = objToArr(newList);
});

function updateSectionOrder() {
	sections.updateListOrder(sectionsArr.value);
}
</script>

<style lang="scss" scoped></style>
