<script>
	import Button from "$lib/components/Button.svelte";
	import Image from "$lib/components/Image.svelte";
	import PropertyCard from "$lib/components/PropertyCard.svelte";

	export let data;
	const { currentUser } = data;
</script>

<h1 class="text-xl font-semibold text-gray-700">My Profile</h1>

<figure class="flex items-center gap-5 bg-white rounded max-w-2xl py-7 mt-3">
	<Image src={currentUser.avatar} />
	<figcaption>
		<h2 class="font-semibold text-gray-700 text-2xl font-ptsans">{currentUser.name}</h2>
		<p class="text-gray-400 text-sm font-semibold mt-2">Real-Estate Agent</p>
		<p class="flex items-center gap-1 text-gray-700 mt-3">
			<i class="i-mdi:email-outline text-xl" />
			{currentUser.email}
		</p>
		<p class="flex items-center gap-1 text-gray-700 mt-3">
			<i class="i-mdi:location text-xl" />
			{currentUser?.location ?? "Los Angeles"}
		</p>
		<p class="flex items-center gap-1 text-gray-700 mt-3">
			<i class="i-mdi:phone-outline text-xl" />
			{currentUser?.contact ?? "+232-99-905-600"}
		</p>
		<p class="flex items-center gap-1 text-gray-700 mt-3">
			<i class="i-mdi:city text-xl" />
			{currentUser?.properties?.length ?? 0} properties
		</p>

		<Button type="button" class="bg-accent px-4 mt-5">Update Account</Button>
	</figcaption>
</figure>

{#if currentUser?.properties.length > 0}
	<article class="mt-5 bg-white p-5 w-fit rounded">
		<h3 class="font-semibold text-gray-700 ml-2 mb-2">My Properties</h3>

		<section class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl">
			{#each currentUser?.properties as property (property.id)}
				<PropertyCard {property} />
			{/each}
		</section>
	</article>
{/if}
