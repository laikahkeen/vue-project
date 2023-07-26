<template>
	<div class="collapse collapse-horizontal show" id="collapseSideBar">
		<div class="p-3 bg-body-tertiary" style="width: 300px; height: 100%">
			<div class="d-flex flex-column pt-4">
				<router-link :to="{ name: 'Inbox' }" class="btn btn-light text-start">
					<i class="bi bi-inbox me-2 text-primary"></i>
					<span>Inbox</span>
				</router-link>
				<router-link :to="{ name: 'Today' }" class="btn btn-light text-start">
					<i class="bi bi-calendar2-check me-2 text-success"></i>
					<span>Today</span>
				</router-link>
				<button class="btn btn-light text-start"><i class="bi bi-calendar3 me-2 text-warning"></i>Upcoming</button>
				<button class="btn btn-light text-start"><i class="bi bi-grid me-2 text-info"></i>Filter & Labels</button>
			</div>
			<div class="d-flex flex-column pt-4">
				<button class="btn btn-light text-start">Projects</button>
				<button class="btn btn-light text-start"><i class="bi bi-circle-fill me-2 text-primary"></i>Personal</button>
				<button class="btn btn-light text-start"><i class="bi bi-circle-fill me-2 text-danger"></i>Work</button>
				<button class="btn btn-light text-start"><i class="bi bi-circle-fill me-2 text-warning"></i>Family</button>
				<button class="btn btn-light text-start"><i class="bi bi-circle-fill me-2 text-success"></i>Hobby</button>
				<button class="btn btn-light text-start"><i class="bi bi-circle-fill me-2 text-info"></i>Chore</button>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
