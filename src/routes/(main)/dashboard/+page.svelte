<script>
	import PropertyCard from "$lib/components/PropertyCard.svelte";
	import PieChartCard from "./PieChartCard.svelte";
	import PropertyReferrals from "./PropertyReferrals.svelte";
	import TotalRevenue from "./TotalRevenue.svelte";
	import { charts } from "./charts.js";

	export let data;
</script>

<h1 class="text-xl font-semibold text-gray-700">Dashboard</h1>

<!-- Pie Charts -->
<section class="my-5 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
	{#each charts as { title, value, data }}
		<PieChartCard {title} {value} {data} />
	{/each}
</section>

<!-- Total Revenue and referrals graph -->
<div class="flex flex-col lg:flex-row gap-2 mb-7">
	<TotalRevenue />
	<PropertyReferrals />
</div>

<section class="bg-white py-5 rounded">
	{#await data.streamed.properties}
		<p class="text-gray-700 italic px-3">loading properties...</p>
	{:then properties}
		<h3 class="text-xl font-semibold text-gray-700 px-2 mb-3">Properties</h3>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl">
			{#each properties as property (property.id)}
				<PropertyCard {property} />
			{/each}
		</div>
	{/await}
</section>
