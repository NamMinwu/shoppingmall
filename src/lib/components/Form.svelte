<form method="post" class="loginContainer">
	<a href="/">
		<img src="/shopcat.png" alt="logo" />
	</a>
	<slot />
</form>

<style>
	.loginContainer {
		margin-top: -70px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 100vh;
	}
	a > img {
		margin-bottom: 30px;
	}
</style>
