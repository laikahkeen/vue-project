<template>
	<div v-if="$route.name == 'Today'">
		Today
		<router-link :to="{ name: 'TodayChildren', params: { children: '123' } }">to children</router-link>
		<router-link :to="{ name: 'TodayChildren', params: { children: '456' } }">to children</router-link>
	</div>
	<router-view></router-view>
</template>

<script setup></script>

<style lang="scss" scoped></style>
