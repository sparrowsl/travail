<script>
import { enhance } from "$app/forms";
import Button from "$lib/components/Button.svelte";
import Input from "$lib/components/Input.svelte";
import { toast } from "svelte-sonner";

export let form;

$: if (form?.errors) {
	// @ts-ignore
	toast.error(form?.errors?.message, {
		// @ts-ignore
		description: form?.errors[0],
	});
}
</script>

<section class="grid font-raleway lg:grid-cols-2 min-h-90vh">
	<div class="grid place-content-center bg-blue-500 p-4 text-center text-white">
		<h1 class="mb-6 font-ptsans text-5xl font-bold text-white">Travail 🏠</h1>
		<p class="rotate-6 transform rounded bg-slate-600 p-2 shadow md:text-lg">
			One stop place to get your estate houses.
		</p>
	</div>

	<form
		action=""
		method="POST"
		class="p-5 grid place-content-center"
		use:enhance
	>
		<fieldset class="grid gap-5 border p-10 rounded">
			<legend class="text-lg font-semibold text-gray-500">
				Login to Admin Dashboard
			</legend>

			<label for="email" class="block text-sm text-gray-500">
				<span>Email</span>
				<Input type="email" name="email" />
			</label>

			<label for="password" class="block text-sm text-gray-500">
				<span>Password</span>
				<Input type="password" name="password" />
			</label>

			<Button class="bg-gray-700 text-white hover:bg-gray-800 rounded">
				Login
			</Button>
		</fieldset>
	</form>
</section>
