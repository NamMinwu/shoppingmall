<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<h1>my page</h1>
<span>{data.user.id}</span>
<span>{data.user.email}</span>
<span>{data.user.name}</span>
<a href="logout">logout</a>
{#if data.orders !== undefined}
	<div class="order-list">
		<h3>Order-List</h3>
		<ul>
			{#each data.orders as order}
				<li>
					<span>{order.updatedAt}</span>
				</li>
				{#each order.products as product}
					<li>
						<span>{product.name}</span>
					</li>
				{/each}
			{/each}
		</ul>
	</div>
{/if}
