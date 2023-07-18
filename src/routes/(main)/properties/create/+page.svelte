<script>
	import { enhance } from "$app/forms";
	import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";
	import SelectField from "$lib/components/SelectField.svelte";
	import Textarea from "$lib/components/Textarea.svelte";
	import { propertyTypes } from "$lib/utils/utils.js";
</script>

<article>
	<h1 class="text-xl font-semibold text-gray-700">Add a Property</h1>

	<form action="" method="POST" class="mt-5 bg-white max-w-4xl p-5 rounded-md" use:enhance>
		<fieldset class="grid gap-7">
			<label for="" class="">
				<span class="text-sm text-gray-700 mb-2 block">Enter property name</span>
				<Input name="name" />
			</label>

			<label for="" class="">
				<span class="text-sm text-gray-700 mb-2 block">Enter Description</span>
				<Textarea name="description" />
			</label>

			<div class="flex items-center gap-5">
				<label for="" class="w-full">
					<span class="text-sm text-gray-700 mb-2 block">Select Property Type</span>
					<SelectField name="type">
						{#each propertyTypes as type}
							<option value={type}>{type}</option>
						{/each}
					</SelectField>
				</label>

				<label for="" class="w-full">
					<span class="text-sm text-gray-700 mb-2 block">Enter property price</span>
					<Input type="number" name="price" placeholder="Enter price" />
				</label>
			</div>

			<label for="" class="">
				<span class="text-sm text-gray-700 mb-2 block">Enter Location</span>
				<Input placeholder="Location" name="location" />
			</label>

			<label for="" class="w-fit">
				<span class="text-sm text-gray-700 mb-2 block">Property Photo</span>
				<Input
					type="file"
					placeholder="Location"
					name="photo"
					class="file:(border-0 bg-gray/20 rounded py-2 px-3 text-sm hover:cursor-pointer)"
				/>
			</label>

			<Button class="bg-accent text-white w-fit px-6">Submit</Button>
		</fieldset>
	</form>
</article>
