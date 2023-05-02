<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<h1>my page</h1>
<span>{data.user.id}</span>
<span>{data.user.email}</span>
<span>{data.user.name}</span>
<a href="logout">logout</a>
