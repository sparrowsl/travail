<script>
	import Button from "$lib/components/Button.svelte";
	import Image from "$lib/components/Image.svelte";
	import PropertyCard from "$lib/components/PropertyCard.svelte";

	export let data;
	const { currentUser } = data;
</script>

<h1 class="font-semibold text-xl text-gray-700">My Profile</h1>

<figure class="bg-white rounded flex mt-3 max-w-2xl py-7 gap-5 items-center">
	<Image src={currentUser.avatar} />
	<figcaption>
		<h2 class="font-semibold font-ptsans text-gray-700 text-2xl">{currentUser.name}</h2>
		<p class="font-semibold mt-2 text-sm text-gray-400">Real-Estate Agent</p>
		<p class="flex mt-3 text-gray-700 gap-1 items-center">
			<i class="text-xl i-mdi:email-outline" />
			{currentUser.email}
		</p>
		<p class="flex mt-3 text-gray-700 gap-1 items-center">
			<i class="text-xl i-mdi:location" />
			{currentUser?.location ?? "Los Angeles"}
		</p>
		<p class="flex mt-3 text-gray-700 gap-1 items-center">
			<i class="text-xl i-mdi:phone-outline" />
			{currentUser?.contact ?? "+232-99-905-600"}
		</p>
		<p class="flex mt-3 text-gray-700 gap-1 items-center">
			<i class="text-xl i-mdi:city" />
			{currentUser?.properties?.length ?? 0} properties
		</p>

		<Button type="button" class="bg-accent mt-5 px-4">Update Account</Button>
	</figcaption>
</figure>

{#if currentUser?.properties?.length > 0}
	<article class="bg-white rounded mt-5 w-fit p-5">
		<h3 class="font-semibold mb-2 ml-2 text-gray-700">My Properties</h3>

		<section class="max-w-4xl grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			{#each currentUser?.properties as property (property.id)}
				<PropertyCard {property} />
			{/each}
		</section>
	</article>
{/if}
