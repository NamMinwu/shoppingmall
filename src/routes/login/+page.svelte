<script>
	import Form from '$lib/components/Form.svelte';
</script>

<Form>
	<div class="login">
		<div class="id_line">
			<label>
				<input name="email" type="email" placeholder="Email" />
			</label>
			<label>
				<input name="password" type="password" placeholder="Password" />
			</label>
		</div>
		<input hidden name="test" value="??" />
		<button type="submit">Login</button>
	</div>
	<div class="register">
		<a href="register">register</a>
	</div>
</Form>

<style>
	.login {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 500px;
		height: 400px;
		border: 1px solid #c6c6c6;
		border-radius: 6px;
		background-color: #fff;
		box-shadow: 0 5px 8px 0 rgba(68, 68, 68, 0.04);
		padding: 20px 28px;
	}
	.login > .id_line {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.id_line > label {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.id_line label > input {
		width: 400px;
		height: 50px;
		border-radius: 6px;
		padding: 0 20px;
		margin-bottom: 30px;
	}
	.login > button {
		margin-top: 50px;
		width: 440px;
		height: 50px;
		border-radius: 6px;
		padding: 0 20px;
		color: #231f1e;
		font-family: Inter, sans-serif;
		font-weight: 500;
		font-size: 18px;
	}
	.login > button:hover {
		margin-top: 50px;
		width: 440px;
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
	.register {
		margin-top: 20px;
	}
	.register > a {
		color: rgb(136, 136, 136);
		text-decoration: none;
	}
	.register > a:hover {
		color: rgb(136, 136, 136);
		text-decoration: underline;
	}
</style>
