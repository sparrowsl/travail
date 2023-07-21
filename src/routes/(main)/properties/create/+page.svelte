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

	// $: console.log($page.data.user.id);
</script>

<h1 class="text-xl font-semibold text-gray-700">Add a Property</h1>

<form
	action=""
	method="POST"
	class="mt-5 bg-white max-w-4xl p-5 rounded-md"
	enctype="multipart/form-data"
	use:enhance
>
	<fieldset class="grid gap-7">
		<Input type="hidden" name="id" value={$page.data.user.id} />
		<label for="" class="">
			<span class="text-sm text-gray-700 mb-2 block">Enter property name</span>
			<Input name="name" />
			{#if form?.errors?.name}
				<small class="text-red-500 block">{form.errors.name[0]}</small>
			{/if}
		</label>

		<label for="" class="">
			<span class="text-sm text-gray-700 mb-2 block">Enter Description</span>
			<Textarea name="description" />
			{#if form?.errors?.description}
				<small class="text-red-500 block">{form.errors.description[0]}</small>
			{/if}
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
				{#if form?.errors?.price}
					<small class="text-red-500 block">{form.errors.price[0]}</small>
				{/if}
			</label>
		</div>

		<label for="" class="">
			<span class="text-sm text-gray-700 mb-2 block">Enter Location</span>
			<Input placeholder="Location of the property" name="location" />
			{#if form?.errors?.location}
				<small class="text-red-500 block">{form.errors.location[0]}</small>
			{/if}
		</label>

		<label for="" class="w-fit">
			<span class="text-sm text-gray-700 mb-2 block">Property Photo</span>
			<Input
				type="file"
				placeholder=""
				name="photo"
				class="file:(border-0 bg-gray/20 rounded py-2 px-3 text-sm hover:cursor-pointer)"
			/>
			{#if form?.errors?.photo}
				<small class="text-red-500 block">{form.errors.photo[0]}</small>
			{/if}
		</label>

		<Button class="bg-accent text-white w-fit px-6">Submit</Button>
	</fieldset>
</form>
