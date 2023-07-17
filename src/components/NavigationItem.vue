<template>
	<li>
		<div>
			<router-link :to="{ name: model.name }">{{
				model.name
			}}</router-link>
			<span v-if="isFolder" @click="toggle">
				[ {{ isOpen ? "-" : "+" }} ]
			</span>
		</div>
		<ul v-if="isOpen">
			<NavigationItem v-for="model in model.children" :model="model" />
		</ul>
	</li>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
	model: Object,
});

const isOpen = ref(false);
const isFolder = computed(() => {
	return props.model.children && props.model.children.length;
});

function toggle() {
	isOpen.value = !isOpen.value;
}
</script>

<style scoped></style>
