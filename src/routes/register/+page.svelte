<script>
	import Form from '$lib/components/Form.svelte';
</script>

<Form>
	<div class="registerContainer">
		<label>
			<input name="email" type="email" placeholder="email" />
		</label>
		<label>
			<input name="password" type="password" placeholder="Password" />
		</label>
		<label>
			<input name="confirmPassword" type="password" placeholder="ConfirmPassword" />
		</label>
		<label>
			<input name="name" type="text" placeholder="name" />
		</label>
		<button type="submit">register</button>
	</div>
</Form>

<style>
	.registerContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 500px;
		height: 600px;
		border: 1px solid #c6c6c6;
		border-radius: 6px;
		background-color: #fff;
		box-shadow: 0 5px 8px 0 rgba(68, 68, 68, 0.04);
		padding: 20px 28px;
	}
	.registerContainer label > input {
		width: 400px;
		height: 50px;
		border-radius: 6px;
		padding: 0 20px;
		margin-bottom: 40px;
	}
	.registerContainer > button {
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

	.registerContainer > button:hover {
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
</style>
