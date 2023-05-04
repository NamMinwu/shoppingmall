<script lang="ts">
	import { cart } from '$lib/stores/store';
	import { enhance } from '$app/forms';
</script>

<h2>장바구니</h2>
{#if $cart.length > 0}
	<form
		method="post"
		use:enhance={({ form, data, action, cancel, submitter }) => {
			return async ({ result, update }) => {
				console.log(result.type === 'success');
				if (result.type === 'success') {
					cart.set([]);
				}
			};
		}}
	>
		<ul>
			{#each $cart as product}
				<input hidden value={product.id} name="productId" />
				<li>{product.name} - {product.price}</li>
			{/each}
		</ul>
		<button type="submit">주문</button>
	</form>
{:else}
	<p>장바구니가 비어 있습니다.</p>
{/if}
