<script lang="ts">
	// import { cart, type TItem } from '$lib/stores/store';
	import type { Product } from '@prisma/client';

	import type { PageServerData } from './$types';
	import { cart } from '$lib/stores/store';

	export let data: PageServerData;

	function addToCart(product: Product) {
		cart.set([...$cart, product]);
	}
</script>

<div class="contanier-overflow">
	<div class="container">
		<img
			class="logo-image"
			src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
			loading="lazy"
			alt=""
		/>
		<nav>
			<div class="leftside">
				<a href="/">Category</a>
				<a href="/">Deals</a>
				<a href="/">What's New</a>
				<a href="/">Delivery</a>
			</div>

			<div class="rightside">
				<a class="account" href="/login">
					<img src="./account-image.png" alt="logo" />
					<div>Account</div>
				</a>

				<a class="cart" href="/cart">
					<img src="./cart.png" alt="logo" />
					<div>Cart</div>
				</a>

				<a href="/mypage">mypage</a>
			</div>
		</nav>
	</div>
</div>

<div class="List">
	<ul>
		{#each data.products as product}
			<li>
				<span>{product.name} - {product.price}원</span>
				<button on:click={() => addToCart(product)}>장바구니 담기</button>
			</li>
		{/each}
	</ul>
</div>
