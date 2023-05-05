<script lang="ts">
	export let isLogin: boolean = false;
</script>

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
			{#if isLogin}
				<a class="account" href="/login">
					<img src="./account-image.png" alt="logo" />
					<div>Account</div>
				</a>
			{:else}
				<a class="mypage" href="/mypage">
					<img src="./account-image.png" alt="logo" />
					<div>Mypage</div>
				</a>
			{/if}

			<a class="cart" href="/cart">
				<img src="./cart.png" alt="logo" />
				<div>Cart</div>
			</a>
		</div>
	</nav>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		max-width: 1360px;
		margin-left: 244px;
		margin-right: 244px;
		padding-left: 40px;
		padding-right: 40px;
		padding-top: 15px;
		padding-bottom: 15px;
		background-color: transparent;
		position: relative;
	}

	.container > nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 85%;
	}

	.leftside {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.leftside > a {
		font-weight: 500;
		text-decoration: none;
		margin-left: 50px;
		color: #231f1e;
		font-family: Inter, sans-serif;
	}
	.leftside > a:hover {
		text-decoration: underline;
	}

	.rightside {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.rightside > a {
		display: flex;
		align-items: center;
		font-weight: 500;
		text-decoration: none;
		margin-left: 50px;
		color: #231f1e;
		font-family: Inter, sans-serif;
	}

	.rightside > a:hover {
		text-decoration: underline;
	}
	.rightside a > img {
		margin-right: 10px;
	}
</style>
