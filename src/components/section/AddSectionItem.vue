<template>
	<button v-if="!isAddingSection" @click="toggleAddSection" class="line-center btn">
		<span>Add section</span>
	</button>
	<EditSectionItem v-else @finishEdit="toggleAddSection" />
</template>

<script setup>
import { ref } from "vue";
import EditSectionItem from "./EditSectionItem.vue";

const isAddingSection = ref(false);

function toggleAddSection() {
	isAddingSection.value = !isAddingSection.value;
}
</script>

<style scoped>
.line-center {
	display: flex;
	align-items: center;
	text-align: center;
	overflow: hidden;
	opacity: 0;
}

.line-center:hover {
	opacity: 1;
}

.line-center:before,
.line-center:after {
	content: "";
	flex: 1;
	border-bottom: 1px solid;
	margin: 0 20px 0 0;
	height: 0;
}

.line-center:after {
	margin: 0 0 0 20px;
}
</style>
