<template>
	<li class="nav-item">
		<router-link
			:to="{ name: model.name }"
			class="nav-link"
			:class="{ active: isActive }"
		>
			<i class="bi pe-none me-2 bi-bootstrap"></i>
			{{ model.name }}
			<span v-if="isFolder" @click="toggle">
				[ {{ isOpen ? "-" : "+" }} ]
			</span>
		</router-link>
		<ul v-if="isOpen" class="btn-toggle-nav">
			<NavigationItem v-for="model in model.children" :model="model" />
		</ul>
	</li>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps({
	model: Object,
});

const isOpen = ref(false);
const isFolder = computed(() => {
	return props.model.children && props.model.children.length;
});
const isActive = computed(() => {
	return props.model.name == route.name;
});

function toggle() {
	isOpen.value = !isOpen.value;
}
</script>

<style scoped>
li {
	min-height: 2.5rem;
	margin-top: 0.25rem;
}
</style>
