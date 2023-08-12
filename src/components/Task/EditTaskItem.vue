<template>
	<div class="card mt-2">
		<form @submit.prevent="handleSave">
			<div class="card-body">
				<input class="form-control-plaintext" type="text" id="taskName" placeholder="Task name" v-model="taskName" />
				<input class="form-control-plaintext form-control-sm" type="text" id="description" placeholder="Description" v-model="taskDescription" />
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-between">
					<button class="btn btn-sm btn-light" type="button"><i class="bi bi-inbox me-2 text-primary"></i>Inbox</button>
					<div class="d-flex">
						<button type="button" class="btn btn-sm btn-secondary mx-1" @click="handleCancel">Cancel</button>
						<button type="submit" class="btn btn-sm btn-primary mx-1">
							{{ prop.task ? "Save" : "Add task" }}
						</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useTasksStore } from "../../store/tasks";

const prop = defineProps({
	task: Object,
	section: Object,
});

const emit = defineEmits(["finishEdit"]);

const tasks = useTasksStore();
const taskName = ref(prop.task ? prop.task.name : "");
const taskDescription = ref(prop.task ? prop.task.description : "");

function handleCancel() {
	emit("finishEdit");
}

function handleSave() {
	if (prop.task === undefined) {
		tasks.createItem(taskName.value, taskDescription.value, null, prop.section ? prop.section.id : null);
	} else {
		tasks.updateItem(prop.task.id, taskName.value, taskDescription.value);
	}
	emit("finishEdit");
	taskName.value = taskDescription.value = "";
}
</script>

<style lang="scss" scoped></style>
