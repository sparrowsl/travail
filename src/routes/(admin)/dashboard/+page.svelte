<script>
import PropertyCard from "$lib/components/PropertyCard.svelte";
import PieChartCard from "./PieChartCard.svelte";
import PropertyReferrals from "./PropertyReferrals.svelte";
import TotalRevenue from "./TotalRevenue.svelte";
import { charts } from "./charts.js";

export let data;
</script>

<h1 class="font-semibold text-xl text-gray-700">Dashboard</h1>

<!-- Pie Charts -->
<section class="my-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
	{#each charts as { title, value, data }}
		<PieChartCard {title} {value} {data} />
	{/each}
</section>

<!-- Total Revenue and referrals graph -->
<div class="flex flex-col mb-7 gap-2 lg:flex-row">
	<TotalRevenue />
	<!-- Referrals or Top agents / Performing agents -->
	<PropertyReferrals />
</div>

<section class="bg-white rounded py-5">
	{#await data.properties}
		<p class="px-3 text-gray-700 italic">loading properties...</p>
	{:then properties}
		<h3 class="font-semibold text-xl mb-3 px-2 text-gray-700">Properties</h3>
		<div class="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
			{#each properties as property (property.id)}
				<PropertyCard {property} />
			{:else}
				<p class="px-3 text-gray-700 italic">No properties added yet</p>
			{/each}
		</div>
	{/await}
</section>
