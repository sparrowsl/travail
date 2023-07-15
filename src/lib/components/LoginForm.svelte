<script>
	import Button from "./shared/Button.svelte";
	import Input from "./shared/Input.svelte";

	let email;
	let password;

	const login = async () => {
		const res = await fetch("/api/login", {
			method: "POST",
			body: JSON.stringify({ email, password }),
		});
		const data = await res.json();
		console.log(data);
	};
</script>

<form
	action="?/login"
	method="POST"
	class="rounded-md bg-white p-5 shadow-sm md:p-10"
	on:submit|preventDefault={login}
>
	<fieldset class="font-raleway grid gap-5">
		<legend class=" mb-5 text-lg font-semibold text-gray-500">Login Now</legend>

		<div>
			<label for="" class=" block text-sm text-gray-500">Email</label>
			<Input type="email" placeholder="john@gmail.com" name="email" bind:value={email} />
		</div>

		<div>
			<label for="" class=" block text-sm text-gray-500">Password</label>
			<Input type="password" placeholder="password" name="password" bind:value={password} />
		</div>

		<Button type="submit" classes="bg-gray-700 text-white hover:bg-gray-800 rounded-full">Login</Button>
	</fieldset>

	<p class="mt-4 text-center font-ptsans text-sm text-gray-500">
		Need an Account? <a href="/register" class="text-blue-600">Register Here</a>
	</p>
</form>
