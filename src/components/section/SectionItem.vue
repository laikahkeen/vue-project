<template>
	<div v-if="!isEditingSection" class="d-flex flex-column">
		<h6 @click="toggleEditSection">{{ section.name }}</h6>
		<TaskList :section="section" />
	</div>
	<EditSectionItem v-else @finishEdit="toggleEditSection" :section="section" />
</template>

<script setup>
import { ref } from "vue";
import EditSectionItem from "./EditSectionItem.vue";
import TaskList from "../Task/TaskList.vue";

const isEditingSection = ref(false);

function toggleEditSection() {
	isEditingSection.value = !isEditingSection.value;
}

const prop = defineProps({
	section: Object,
});
</script>

<style lang="scss" scoped></style>
