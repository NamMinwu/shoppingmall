<script lang="ts">
	// import { cart, type TItem } from '$lib/stores/store';
	import type { Product } from '@prisma/client';

	import type { PageServerData } from './$types';
	import { cart } from '$lib/stores/store';

	export let title: string;
	export let products: Product[];

	function addToCart(product: Product) {
		cart.set([...$cart, product]);
	}
</script>

<section>
	<div class="container">
		<div class="title">
			<h3>{title}</h3>
		</div>
		<div class="List">
			{#each products as product}
				<div class="product">
					<div class="product-image">
						<img src="./{product.name}.png" alt="logo" />
					</div>
					<div class="product-inf">
						<div class="product-name">{product.name}</div>
						<div class="product-price">${product.price}</div>
					</div>
					<button on:click={() => addToCart(product)}>Add to Cart</button>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		padding-top: 80px;
		padding-bottom: 100px;
	}
	section > .container {
		margin-right: auto;
		margin-left: auto;
		padding-right: 40px;
		padding-left: 40px;
		width: 100%;
		max-width: 1264px;
		display: flex;
		flex-direction: column;
	}
	section .container > .title {
		width: 100%;
	}

	section .title > h3 {
		margin-top: 20px;
		margin-bottom: 10px;
		font-family: Eina02, sans-serif;
		font-size: 28px;
		font-weight: 700;
	}
	section .container > .List {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: auto;
		padding-top: 50px;
		grid-column-gap: 24px;
		grid-row-gap: 16px;
	}
	/* .List > .product {
		display: flex;
		flex-direction: column;
	} */

	.List .product > .product-image {
		width: 100%;
		background-color: #f5f6f6;
		border-radius: 10px;
		margin-bottom: 25px;
	}
	.List .product > .product-inf {
		display: flex;
		justify-content: space-between;
		font-family: Inter, sans-serif;
		color: #333;
		line-height: 20px;
		padding-left: 5px;
		padding-right: 5px;
		font-size: 16px;
		font-weight: 550;
		margin-bottom: 10px;
	}
	.product > button {
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

	.product > button:hover {
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
</style>
