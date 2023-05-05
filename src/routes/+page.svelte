<script lang="ts">
	import type { PageServerData } from './$types';
	import ItemSession from './ItemSession.svelte';
	import Header from '$lib/components/Header.svelte';

	export let data: PageServerData;
</script>

<Header isLogin={data.user === undefined} />
<ItemSession title="hello" products={data.products} />
