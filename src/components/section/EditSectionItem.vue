<template>
	<div class="card mt-2">
		<form @submit.prevent="handleSave">
			<div class="card-body">
				<input class="form-control" type="text" id="sectionName" placeholder="Section name" v-model="sectionName" />
				<div class="d-flex mt-2">
					<button type="submit" class="btn btn-sm btn-primary">
						{{ prop.section ? "Save" : "Add section" }}
					</button>
					<button type="button" class="btn btn-sm btn-secondary mx-2" @click="handleCancel">Cancel</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useSectionsStore } from "../../store/sections";

const prop = defineProps({
	section: Object,
});

const emit = defineEmits(["finishEdit"]);

const sections = useSectionsStore();
const sectionName = ref(prop.section ? prop.section.name : "");

function handleCancel() {
	emit("finishEdit");
}

function handleSave() {
	if (prop.section === undefined) {
		sections.createItem(sectionName.value);
	} else {
		sections.updateItem(prop.section.id, sectionName.value);
	}
	emit("finishEdit");
	sectionName.value = "";
}
</script>

<style lang="scss" scoped></style>
