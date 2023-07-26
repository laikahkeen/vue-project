<template>
	<nav class="navbar navbar-expand-lg bg-primary text-white fixed-top">
		<div class="container-fluid">
			<div class="d-flex">
				<button class="btn btn-sm btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSideBar">
					<i class="bi bi-list"></i>
				</button>
				<router-link :to="{ name: 'Inbox' }">
					<button class="btn btn-sm btn-primary" type="button">
						<i class="bi bi-house-door"></i>
					</button>
				</router-link>
				<div class="input-group input-group-sm ms-2">
					<span class="input-group-text"><i class="bi bi-search"></i></span>
					<input type="text" class="form-control" placeholder="Search" />
				</div>
			</div>
			<div class="d-flex align-items-center">
				<button class="btn btn-sm btn-primary" type="button">
					<i class="bi bi-star-fill me-2"></i>
					<span class="text-nowrap">Upgrade to Pro</span>
				</button>
				<button class="btn btn-sm btn-primary" type="button">
					<i class="bi bi-plus-lg"></i>
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
				<div class="rounded bg-white mx-2" style="width: 24px; height: 24px">
					<img src="/logo-k.svg" alt="logo" class="align-top" />
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
