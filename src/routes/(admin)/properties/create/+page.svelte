<script>
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";
	import SelectField from "$lib/components/SelectField.svelte";
	import Textarea from "$lib/components/Textarea.svelte";
	import { propertyTypes } from "$lib/utils/utils.js";

	/** @type {import("./$types").ActionData} */
	export let form;
</script>

<h1 class="font-semibold text-xl text-gray-700">Add a Property</h1>

<form
	action=""
	method="POST"
	class="bg-white rounded-md mt-5 max-w-4xl p-5"
	enctype="multipart/form-data"
	use:enhance
>
	<fieldset class="grid gap-7">
		<Input type="hidden" name="agentId" value={$page.data.user.id} />
		<label for="" class="">
			<span class="text-sm mb-2 text-gray-700 block">Enter property name</span>
			<Input name="name" />
			{#if form?.errors?.name}
				<small class="text-red-500 block">{form.errors.name[0]}</small>
			{/if}
		</label>

		<label for="" class="">
			<span class="text-sm mb-2 text-gray-700 block">Enter Description</span>
			<Textarea name="description" />
			{#if form?.errors?.description}
				<small class="text-red-500 block">{form.errors.description[0]}</small>
			{/if}
		</label>

		<div class="flex gap-5 items-center">
			<label for="" class="w-full">
				<span class="text-sm mb-2 text-gray-700 block">Select Property Type</span>
				<SelectField name="type">
					{#each propertyTypes as type}
						<option value={type}>{type}</option>
					{/each}
				</SelectField>
			</label>

			<label for="" class="w-full">
				<span class="text-sm mb-2 text-gray-700 block">Enter property price</span>
				<Input type="number" name="price" placeholder="Enter price" />
				{#if form?.errors?.price}
					<small class="text-red-500 block">{form.errors.price[0]}</small>
				{/if}
			</label>
		</div>

		<label for="" class="">
			<span class="text-sm mb-2 text-gray-700 block">Enter Location</span>
			<Input placeholder="Location of the property" name="location" />
			{#if form?.errors?.location}
				<small class="text-red-500 block">{form.errors.location[0]}</small>
			{/if}
		</label>

		<label for="" class="w-fit">
			<span class="text-sm mb-2 text-gray-700 block">Property Photo</span>
			<Input
				type="file"
				accept="image/*"
				name="photo"
				class="rounded bg-gray/20 text-sm py-2 px-3 file:(border-0 hover:cursor-pointer"
			/>
			{#if form?.errors?.photo}
				<small class="text-red-500 block">{form.errors.photo[0]}</small>
			{/if}
		</label>

		<Button class="bg-accent text-white w-fit px-6">Submit</Button>
	</fieldset>
</form>
