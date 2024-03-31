<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { applyAction, enhance } from "$app/forms";
	import { toast } from "svelte-sonner";
	import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";
	import SelectField from "$lib/components/SelectField.svelte";
	import Textarea from "$lib/components/Textarea.svelte";
	import { propertyTypes } from "$lib/utils/utils.js";
</script>

<h1 class="font-semibold text-xl text-gray-700">Add new Property</h1>

<form
	action=""
	method="POST"
	class="bg-white rounded-md mt-5 max-w-4xl p-5"
	enctype="multipart/form-data"
	use:enhance={() => {
		return async ({ result }) => {
			if (result.type === "success" && result?.data) {
				for (const error of /** @type {String[]} */ (
					result?.data?.errors
				)) {
					toast.error(error);
				}
			}

			if (result.type === "success" && !result?.data) {
				toast.success("Property created successfully!!");
				goto("/properties");
				await applyAction(result);
			}
		};
	}}
>
	<fieldset class="grid gap-7">
		<Input name="userId" type="hidden" value={$page.data.user.id} />
		<Input label="Title" name="title" />
		<Textarea label="Description" name="description" />

		<div class="grid grid-cols-2 gap-5 justify-center">
			<SelectField name="type" label="Select Property Type">
				{#each propertyTypes as type}
					<option value={type}>{type}</option>
				{/each}
			</SelectField>

			<Input label="Price" type="number" name="price" min={0} />
		</div>

		<Input label="Location" name="location" />
		<Input
			label="Property Photo"
			type="file"
			accept="image/*"
			name="photo"
			class="rounded bg-gray/20 text-sm py-2 px-3 file:(border-0 hover:cursor-pointer) w-fit"
		/>

		<Button class="bg-brand-accent text-white w-fit px-6">Submit</Button>
	</fieldset>
</form>
