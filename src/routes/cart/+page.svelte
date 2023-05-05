<script lang="ts">
	import { cart } from '$lib/stores/store';
	import { enhance } from '$app/forms';
</script>

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
		class="cartContainer"
	>
		<h2>장바구니</h2>
		<div class="cart">
			{#each $cart as product}
				<div class="product">
					<div class="product-image">
						<img src="./{product.name}.png" alt="logo" />
					</div>
					<div class="product-inf">
						<div class="product-name">{product.name}</div>
						<div class="product-price">${product.price}</div>
					</div>
				</div>
			{/each}
		</div>
		<button type="submit">주문</button>
	</form>
{:else}
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
		class="cartContainer"
	>
		<h2>장바구니</h2>
		<div class="cart">
			<p>장바구니가 비었습니다</p>
		</div>
	</form>
{/if}

<style>
	.cartContainer {
		margin-top: -10px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 100vh;
	}
	.cartContainer > .cart {
		overflow: scroll;
		display: grid;
		width: 800px;
		height: 700px;
		max-height: 700px;
		border: 1px solid #c6c6c6;
		border-radius: 6px;
		background-color: #fff;
		box-shadow: 0 5px 8px 0 rgba(68, 68, 68, 0.04);
		padding: 20px 28px;
		grid-row-gap: 20px;
	}
	.cart > .product {
		width: 100%;
		max-height: 205px;
		/* height: 100%; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #c6c6c6;
		border-radius: 6px;
		background-color: #fff;
		box-shadow: 0 5px 8px 0 rgba(68, 68, 68, 0.04);
	}
	.cart .product > .product-image {
		/* width: 200px; */
		background-color: #f5f6f6;
		border-radius: 10px;
	}
	.product .product-image > img {
		width: 200px;
		height: 200px;
		object-fit: contain;
	}

	.cart .product > .product-inf {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		font-family: Inter, sans-serif;
		color: #333;
		line-height: 20px;
		padding-left: 5px;
		padding-right: 5px;
		font-size: 16px;
		font-weight: 550;
		margin-bottom: 10px;
	}
	.cartContainer > button {
		margin-top: 10px;
		width: 802px;
		height: 50px;
		border-radius: 6px;
		padding: 0 20px;
		color: #231f1e;
		font-family: Inter, sans-serif;
		background-color: white;
		font-weight: 500;
		font-size: 18px;
	}
	.cartContainer > button:hover {
		margin-top: 10px;
		width: 802px;
		height: 50px;
		border-radius: 6px;
		padding: 0 20px;
		background-color: rgb(0, 61, 41);
		color: white;
		font-family: Inter, sans-serif;
		font-weight: 500;
		font-size: 18px;
		border-color: rgb(0, 61, 41);
		cursor: pointer;
		transition: all 300ms ease;
	}
</style>
