<script>
	import PieChartCard from "./PieChartCard.svelte";
	import PropertyReferrals from "./PropertyReferrals.svelte";
	import TotalRevenue from "./TotalRevenue.svelte";

	const charts = [
		{
			title: "Properties for Sale",
			value: 684,
			data: {
				datasets: [
					{
						data: [50, 684],
						backgroundColor: ["rgba(107, 114, 128, 0.2)", "rgba(0, 0, 255, 0.6)"],
					},
				],
			},
		},
		{
			title: "Properties for Rent",
			value: 550,
			data: {
				datasets: [
					{
						data: [50, 550],
						backgroundColor: ["rgba(107, 114, 128, 0.2)", "rgba(0, 0, 255, 0.6)"],
					},
				],
			},
		},
		{
			title: "Total Customers",
			value: 5684,
			data: {
				datasets: [
					{
						data: [50, 5684],
						backgroundColor: ["rgba(107, 114, 128, 0.2)", "rgba(0, 0, 255, 0.6)"],
					},
				],
			},
		},
		{
			title: "Properties for Cities",
			value: 555,
			data: {
				datasets: [
					{
						data: [50, 555],
						backgroundColor: ["rgba(107, 114, 128, 0.2)", "rgba(0, 0, 255, 0.6)"],
					},
				],
			},
		},
	];
</script>

<article>
	<h1 class="text-xl font-semibold text-gray-700">Dashboard</h1>

	<!-- Pie Charts -->
	<section class="my-5 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
		{#each charts as { title, value, data }}
			<PieChartCard {title} {value} {data} />
		{/each}
	</section>

	<!-- Total Revenue and referrals graph -->
	<div class="flex flex-col lg:flex-row gap-2">
		<TotalRevenue />
		<PropertyReferrals />
	</div>
</article>
