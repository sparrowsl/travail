<script>
import { page } from "$app/stores";
import { applyAction, enhance } from "$app/forms";
import { goto } from "$app/navigation";
import { toast } from "svelte-sonner";
import Button from "$lib/components/Button.svelte";
import Input from "$lib/components/Input.svelte";
import SelectField from "$lib/components/SelectField.svelte";
import Textarea from "$lib/components/Textarea.svelte";
import { propertyTypes } from "$lib/utils/utils.js";

/** @type {import("./$types").PageServerData} */
export let data;
const { property } = data;
</script>

<h1 class="text-xl font-semibold text-gray-700">Update Property Details</h1>

<form
	action=""
	method="POST"
	class="mt-5 bg-white max-w-4xl p-5 rounded-md"
	enctype="multipart/form-data"
	use:enhance={() => {
		return async ({ result }) => {
			if (result.type === "success" && result?.data) {
				console.log("result.data", result.data);
				for (const error of /** @type {String[]} */ (result?.data?.errors)) {
					toast.error(error);
				}
			}

			if (result.type === "success" && !result?.data) {
				toast.success("Property updated successfully!!");
				goto(`/properties/${$page.params?.id}`);
				await applyAction(result);
			}
		};
	}}
>
	<fieldset class="grid gap-7">
		<Input name="propertyId" type="hidden" value={property.id} />
		<Input label="Title" name="title" value={property.title} />
		<Textarea label="Description" name="description" value={property.title} />

		<div class="grid grid-cols-2 gap-5 justify-center">
			<SelectField name="type" label="Property Type">
				{#each propertyTypes as type}
					<option value={type} selected={type === property.type}>
						{type}
					</option>
				{/each}
			</SelectField>

			<Input
				label="Price"
				type="number"
				name="price"
				min={0}
				value={property.price}
			/>
		</div>

		<Input label="Location" name="location" value={property.location} />
		<Input
			label="Property Photo (optional)"
			type="file"
			accept="image/*"
			name="photo"
			required={false}
			class="rounded bg-gray/20 text-sm py-2 px-3 file:(border-0 hover:cursor-pointer) w-fit"
		/>
		<!-- Already existing image name -->
		<Input type="hidden" name="propertyPhoto" value={property.photo} />

		<Button class="bg-brand-accent text-white w-fit px-6">
			Update Property
		</Button>
	</fieldset>
</form>
