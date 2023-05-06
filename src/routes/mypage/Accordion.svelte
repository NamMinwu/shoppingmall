<script lang="ts">
	import type { Order, Product } from '@prisma/client';
	export let title: string;
	let isOpen: boolean = false;
	function toggleList() {
		isOpen = !isOpen;
	}
</script>

<div class="toggleButton">
	<button on:click={toggleList}>{title}</button>
</div>
<div class="list">
	{#if isOpen}
		<slot />
	{/if}
</div>

<style>
	.toggleButton > button {
		padding: 10px;
		font-family: Inter, sans-serif;
		color: #333;
		margin-top: 5px;
		margin-left: 5px;
		background-color: white;
		font-size: 14px;
		font-weight: 550;
		border-style: solid;
		border-width: 1px;
		border-radius: 20px;
		border-color: #333;
	}
	.toggleButton > button:hover {
		padding: 10px;
		font-family: Inter, sans-serif;
		color: white;
		margin-top: 5px;
		margin-left: 5px;
		background-color: rgb(0, 61, 41);
		font-size: 14px;
		font-weight: 550;
		border-style: solid;
		border-width: 1px;
		border-radius: 20px;
		border-color: rgb(0, 61, 41);
		cursor: pointer;
		transition: all 300ms ease;
	}
	.list {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
