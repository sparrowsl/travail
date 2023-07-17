<script>
	import PropertyCard from "./PropertyCard.svelte";
</script>

<article>
	<div class="flex items-center justify-between mb-4">
		<h1 class="text-xl font-semibold text-gray-700 ml-3">All Properties</h1>
		<a href="/properties" class="text-sm flex items-center gap-2 bg-accent font-bold rounded p-2">
			<i class="i-mdi:plus text-2xl" />
			<span>Add Property</span>
		</a>
	</div>

	<section class="grid grid-cols-3 gap-5 max-w-4xl">
		{#each { length: 5 } as _}
			<PropertyCard />
		{/each}
	</section>
</article>
