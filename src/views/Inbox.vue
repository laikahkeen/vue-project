<template>
	<div class="container-fluid">
		<div class="d-flex justify-content-between px-5 pt-4">
			<h5>Inbox</h5>
			<div>
				<button class="btn btn-sm btn-light mx-1">
					<i class="bi bi-sliders me-2"></i>View
				</button>
				<button class="btn btn-sm btn-light mx-1">
					<i class="bi bi-chat me-2"></i>Comments
				</button>
				<button class="btn btn-sm btn-light mx-1">
					<i class="bi bi-three-dots"></i>
				</button>
			</div>
		</div>
		<div class="px-5 pt-4">
			<div class="d-flex flex-column">
				<SectionList />
			</div>
		</div>
	</div>
</template>

<script setup>
import SectionList from "../components/section/SectionList.vue";
</script>

<style lang="scss" scoped></style>
