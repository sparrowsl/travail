<script>
	import PropertyCard from "$lib/components/PropertyCard.svelte";

	/** @type {import("./$types").PageData} */
	export let data;
</script>

<article>
	<div class="flex items-center justify-between mb-4">
		<h1 class="text-xl font-semibold text-gray-700">All Properties</h1>
		<a href="/properties/create" class="text-sm flex items-center gap-2 bg-accent font-bold rounded p-2">
			<i class="i-mdi:plus text-2xl" />
			<span>Add Property</span>
		</a>
	</div>

	<section class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl">
		{#each data.properties as property (property.id)}
			<PropertyCard {property} />
		{:else}
			<p class="italic text-gray-700">No property added yet.</p>
		{/each}
	</section>
</article>
