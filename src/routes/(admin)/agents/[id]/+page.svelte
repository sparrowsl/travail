<script>
	import Image from "$lib/components/Image.svelte";
	import PropertyCard from "$lib/components/PropertyCard.svelte";

	export let data;
	const { agent } = data;
</script>

<h1 class="font-semibold text-xl text-gray-700">Agent Profile</h1>

<figure class="bg-white rounded flex mt-3 max-w-2xl py-7 gap-5 items-center">
	<Image src={String(agent?.avatar)} />
	<figcaption>
		<h2 class="font-semibold font-ptsans text-gray-700 text-2xl">{agent?.name}</h2>
		<p class="font-semibold mt-2 text-sm text-gray-400">Real-Estate Agent</p>
		<p class="flex mt-3 text-gray-700 gap-1 items-center">
			<i class="text-xl i-mdi:email-outline" />
			{agent?.email}
		</p>
		<p class="flex mt-3 text-gray-700 gap-1 items-center">
			<i class="text-xl i-mdi:location" />
			{agent?.location || "Los Angeles"}
		</p>
		<p class="flex mt-3 text-gray-700 gap-1 items-center">
			<i class="text-xl i-mdi:phone-outline" />
			{agent?.contact || "+232-99-905-600"}
		</p>
		<p class="flex mt-3 text-gray-700 gap-1 items-center">
			<i class="text-xl i-mdi:city" />
			{agent?.properties?.length || 0} properties
		</p>
	</figcaption>
</figure>

{#if agent?.properties?.length > 0}
	<article class="bg-white mt-5 w-fit p-5">
		<h3 class="font-semibold text-gray-700">Agent's Properties</h3>

		<section class="max-w-4xl grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			{#each agent?.properties as property (property.id)}
				<PropertyCard {property} />
			{/each}
		</section>
	</article>
{/if}
