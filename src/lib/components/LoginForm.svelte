<script>
	import Button from "./Button.svelte";
	import Input from "./Input.svelte";
</script>

<form
	action="?/login"
	method="POST"
	class="rounded-md bg-white p-5 shadow-sm md:p-10 grid place-content-center"
>
	<fieldset class="font-raleway grid gap-5">
		<legend class=" mb-5 text-lg font-semibold text-gray-500">Login Now</legend>

		<label for="" class=" block text-sm text-gray-500">
			<span>Email</span>
			<Input type="email" placeholder="john@gmail.com" name="email" />
		</label>

		<label for="" class=" block text-sm text-gray-500">
			<span>Password</span>
			<Input type="password" placeholder="password" name="password" />
		</label>

		<Button class="bg-gray-700 text-white hover:bg-gray-800 rounded-full">Login</Button>
	</fieldset>

	<p class="mt-4 text-center font-ptsans text-sm text-gray-500">
		Need an Account? <a href="/register" class="text-blue-600">Register Here</a>
	</p>
</form>
