<script>
	import Image from "$lib/components/Image.svelte";
	import PropertyCard from "$lib/components/PropertyCard.svelte";

	export let data;
</script>

<h1 class="text-xl font-semibold text-gray-700">Agent Profile</h1>

<figure class="flex items-center gap-5 bg-white rounded max-w-2xl py-7 mt-3">
	<Image src={data.agent.avatar} />
	<figcaption>
		<h2 class="font-semibold text-gray-700 text-2xl font-ptsans">{data.agent.name}</h2>
		<p class="text-gray-400 text-sm font-semibold mt-2">Real-Estate Agent</p>
		<p class="flex items-center gap-1 text-gray-700 mt-3">
			<i class="i-mdi:email-outline text-xl" />
			{data.agent.email}
		</p>
		<p class="flex items-center gap-1 text-gray-700 mt-3">
			<i class="i-mdi:location text-xl" />
			{data.agent?.location ?? "Los Angeles"}
		</p>
		<p class="flex items-center gap-1 text-gray-700 mt-3">
			<i class="i-mdi:phone-outline text-xl" />
			{data.agent?.contact ?? "+232-99-905-600"}
		</p>
		<p class="flex items-center gap-1 text-gray-700 mt-3">
			<i class="i-mdi:city text-xl" />
			{data.agent?.properties?.length ?? 0} properties
		</p>
	</figcaption>
</figure>

{#if data.agent?.properties.length > 0}
	<article class="mt-5 bg-white p-5 w-fit">
		<h3 class="font-semibold text-gray-700">Agent's Properties</h3>

		<section class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl">
			{#each data.agent?.properties as property (property.id)}
				<PropertyCard {property} />
			{/each}
		</section>
	</article>
{/if}
