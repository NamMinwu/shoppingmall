<script lang="ts">
	import { cart } from '$lib/stores/store';
	import axios from 'axios';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	async function submitOrder() {
		const response = await axios.post('/api/orders', { items: $cart });
		if (response !== undefined) {
			console.log('주문이 성공적으로 처리되었습니다!');
			cart.set([]);
		} else {
			console.error('주문 처리 중 오류가 발생했습니다:');
		}
	}
</script>

{#if data !== undefined}
	<h2>장바구니</h2>
	{#if $cart.length > 0}
		<ul>
			{#each $cart as item}
				<input hidden value={item.name} name="item.name" />
				<li>{item.name} - {item.price}</li>
			{/each}
		</ul>
		<button on:click={submitOrder}>주문</button>
	{:else}
		<p>장바구니가 비어 있습니다.</p>
	{/if}
{:else}
	<p>login please</p>
{/if}
