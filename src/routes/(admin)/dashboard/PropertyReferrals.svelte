<script>
	const referrals = [
		{ name: "Social Media", percentage: 64 },
		{ name: "Marketplaces", percentage: 40 },
		{ name: "Websites", percentage: 50 },
		{ name: "Digital Ads", percentage: 80 },
		{ name: "Others", percentage: 15 },
	];
</script>

<section class="p-5 flex flex-col basis-full lg:max-w-md justify-evenly bg-white rounded-md">
	<h3 class="font-semibold text-gray-700 text-lg">Property Referrals</h3>

	{#each referrals as { name, percentage } (name)}
		<label for="" class="">
			<p class="flex items-center justify-between"><span>{name}</span> <span>{percentage}%</span></p>
			<progress max="100" value={percentage} class="h-2 w-full" />
		</label>
	{/each}
</section>

<style>
	progress::-webkit-progress-bar {
		background-color: rgb(128, 128, 128, 0.2);
		border-radius: 9999px;
	}
	progress::-webkit-progress-value {
		background-color: rgb(59, 130, 246);
		border-radius: 9999px;
	}
</style>
