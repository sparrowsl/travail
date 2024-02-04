<script>
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";
	import SelectField from "$lib/components/SelectField.svelte";
	import Textarea from "$lib/components/Textarea.svelte";
	import { propertyTypes } from "$lib/utils/utils.js";
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

<h1 class="font-semibold text-xl text-gray-700">Add a new Agent</h1>

<form
	action=""
	method="POST"
	class="bg-white rounded-md mt-5 max-w-4xl p-5"
	use:enhance
>
	<fieldset class="grid gap-7">
		<!-- <Input type="hidden" name="agentId" value={$page.data.user.id} /> -->
		<label for="" class="">
			<span class="text-sm mb-2 text-gray-700 block">Name</span>
			<Input name="name" />
		</label>

		<label for="" class="">
			<span class="text-sm mb-2 text-gray-700 block">Username</span>
			<Input name="username" />
		</label>

		<label for="" class="">
			<span class="text-sm mb-2 text-gray-700 block">Email</span>
			<Input name="email" type="email" />
		</label>

		<label for="" class="">
			<span class="text-sm mb-2 text-gray-700 block">Contact</span>
			<Input name="contact" />
		</label>

		<label for="" class="">
			<span class="text-sm mb-2 text-gray-700 block">Password</span>
			<Input name="password" type="password" />
		</label>

		<Button class="bg-brand-accent text-white w-fit px-6">Add Agent</Button>
	</fieldset>
</form>
