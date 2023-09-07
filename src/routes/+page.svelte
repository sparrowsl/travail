<script>
	import { enhance } from "$app/forms";
	import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";

	/** @type {import("./$types").ActionData}*/
	export let form;
</script>

<main class="">
	<section class="grid h-screen font-raleway lg:grid-cols-2">
		<div class="grid place-content-center bg-blue-500 p-4 text-center text-white">
			<h1 class="mb-6 font-ptsans text-5xl font-bold text-white">Travail 💼</h1>
			<p class="rotate-6 transform rounded bg-slate-600 p-2 shadow md:text-lg">
				One stop place to get your estate houses.
			</p>
		</div>

		<form action="/?/login" method="POST" class="p-5 shadow-sm md:p-10 grid place-content-center" use:enhance>
			{#if form?.errors?.message}
				<p class="text-sm bg-red/20 text-red p-1 font-ptsans mb-2">{form.errors?.message}</p>
			{/if}
			<fieldset class="grid gap-5">
				<legend class="mb-5 text-lg font-semibold text-gray-500">Login Now</legend>

				<label for="email" class="block text-sm text-gray-500">
					<span>Email</span>
					<Input type="email" placeholder="john@gmail.com" name="email" id="email" />
					{#if form?.errors?.email}
						<small class="text-red-500 block">{form.errors.email[0]}</small>
					{/if}
				</label>

				<label for="password" class="block text-sm text-gray-500">
					<span>Password</span>
					<Input type="password" placeholder="password" name="password" id="password" />
					{#if form?.errors?.password}
						<small class="text-red-500 block">{form.errors.password[0]}</small>
					{/if}
				</label>

				<Button class="bg-gray-700 text-white hover:bg-gray-800 rounded-full">Login</Button>
			</fieldset>

			<p class="mt-4 text-center font-ptsans text-sm text-gray-500">
				Need an Account? <a href="/register" class="text-blue-600">Register Here</a>
			</p>
		</form>
	</section>
</main>
