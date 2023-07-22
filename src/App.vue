<script setup></script>

<template>
	<nav class="navbar navbar-expand-lg bg-primary text-white fixed-top">
		<div class="container-fluid">
			<div class="d-flex">
				<button
					class="btn btn-sm btn-primary"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseSideBar">
					<i class="bi bi-list"></i>
				</button>
				<button class="btn btn-sm btn-primary" type="button">
					<i class="bi bi-house-door"></i>
				</button>
				<div class="input-group input-group-sm ms-2">
					<span class="input-group-text"
						><i class="bi bi-search"></i
					></span>
					<input
						type="text"
						class="form-control"
						placeholder="Search" />
				</div>
			</div>
			<div class="d-flex align-items-center">
				<button class="btn btn-sm btn-primary" type="button">
					<i class="bi bi-star-fill me-2"></i>
					<span class="fs-7 text-nowrap">Upgrade to Pro</span>
				</button>
				<button class="btn btn-sm btn-primary" type="button">
					<i class="bi bi-plus"></i>
				</button>
				<button class="btn btn-sm btn-primary" type="button">
					<i class="bi bi-graph-up"></i>
				</button>
				<button class="btn btn-sm btn-primary" type="button">
					<i class="bi bi-question-circle"></i>
				</button>
				<button class="btn btn-sm btn-primary" type="button">
					<i class="bi bi-bell"></i>
				</button>
				<div class="rounded bg-white" style="width: 24px; height: 24px">
					<img src="/logo-k.svg" alt="logo" class="align-top" />
				</div>
			</div>
		</div>
	</nav>
	<main style="height: calc(100vh - 47px); margin-top: 47px" class="d-flex">
		<div class="collapse collapse-horizontal show" id="collapseSideBar">
			<div
				class="p-3 bg-body-tertiary"
				style="width: 300px; height: 100%">
				<div class="d-flex flex-column">
					<button class="btn btn-light text-start">
						<i class="bi bi-inboxes me-2 text-primary"></i>Inbox
					</button>
					<button class="btn btn-light text-start">
						<i class="bi bi-calendar2-check me-2 text-success"></i
						>Today
					</button>
					<button class="btn btn-light text-start">
						<i class="bi bi-calendar3 me-2 text-warning"></i
						>Upcoming
					</button>
					<button class="btn btn-light text-start">
						<i class="bi bi-grid me-2 text-info"></i>Filter & Labels
					</button>
				</div>
			</div>
		</div>
		<div class="container"></div>
	</main>
</template>

<style scoped></style>
