<script lang="ts">
	import type { PageServerData } from './$types';
	import Accordion from './Accordion.svelte';

	export let data: PageServerData;
</script>

<div class="mypageContainer">
	<div class="userInfo">
		<h1>my page</h1>
		<span>{data.user.email}</span>
		<span>{data.user.name}</span>
		<a href="logout">logout</a>
	</div>
	{#if data.orders !== undefined}
		<div class="order-list">
			<h3>Order-List</h3>
			<div>
				{#each data.orders as order}
					<Accordion title={order.updatedAt.toString()}>
						{#each order.products as product}
							<div class="product">
								<span>{product.name}</span>
							</div>
						{/each}
					</Accordion>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.mypageContainer {
		margin-top: -70px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 100vh;
	}
	.userInfo {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.userInfo > span {
		color: #231f1e;
		font-family: Inter, sans-serif;
		font-weight: 500;
		margin-bottom: 10px;
		font-size: 18px;
	}
	.userInfo > a {
		color: #231f1e;
		font-family: Inter, sans-serif;
		font-size: 18px;
		font-weight: 500;
		text-decoration: none;
	}
	.userInfo > a:hover {
		color: rgb(0, 61, 41);
		font-family: Inter, sans-serif;
		font-weight: 500;
		font-size: 18px;
		text-decoration: underline;
	}
	.order-list {
		display: flex;
		flex-direction: column;
	}
	.product {
		padding: 10px;
		color: #231f1e;
		font-family: Inter, sans-serif;
		font-size: 18px;
		font-weight: 500;
	}
</style>
