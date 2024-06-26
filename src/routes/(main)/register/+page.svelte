<script>
import Input from "$lib/components/Input.svelte";
import Button from "$lib/components/Button.svelte";
import { enhance } from "$app/forms";

/** @type {import("./$types").ActionData}*/
export let form;
</script>

<main class="bg-gray-200">
	<section class="container mx-auto grid min-h-screen place-content-center md:p-10">
		<form
			action=""
			method="POST"
			class="min-w-[20em] rounded-md bg-white p-5 shadow-lg md:(min-w-[25em] p-10)"
			use:enhance
		>
			<fieldset class="grid gap-5">
				<legend class="mb-5 font-raleway text-lg font-semibold text-gray-500">Register</legend>

				<label for="name" class="block font-raleway text-sm text-gray-600">
					<span>Full Name</span>
					<Input name="name" class="" placeholder="John Smith" id="name" />
					{#if form?.errors?.name}
						<small class="text-red-500 block">{form.errors.name[0]}</small>
					{/if}
				</label>

				<label for="email" class="block font-raleway text-sm text-gray-600">
					<span>Email</span>
					<Input type="email" name="email" placeholder="john@gmail.com" id="email" />
					{#if form?.errors?.email}
						<small class="text-red-500 block">{form.errors.email[0]}</small>
					{/if}
				</label>

				<label for="password" class="block font-raleway text-sm text-gray-600">
					<span>Password</span>
					<Input type="password" name="password" placeholder="password" id="password" />
					{#if form?.errors?.password}
						<small class="text-red-500 block">{form.errors.password[0]}</small>
					{/if}
				</label>

				<Button class="rounded-md text-white cursor-default hover:bg-gray-800 bg-gray-700">Register</Button>
			</fieldset>

			<p class="mt-4 text-center font-ptsans text-sm text-gray-500">
				Already have an Account? <a href="/" class="text-blue-600">Login Here</a>
			</p>
		</form>
	</section>
</main>
