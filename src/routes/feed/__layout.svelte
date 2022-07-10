<script>
	import Navigation from "$lib/components/Navigation.svelte";
	import Trending from "$lib/components/Trending.svelte";
</script>

<div class="container mx-auto grid h-screen md:grid-cols-[20vw_1fr] lg:grid-cols-[20vw_1fr_20vw]">
	<Navigation />
	<main class="border border-y-0 border-gray-300 p-2 md:border-r-0 lg:border-r">
		<slot />
	</main>
	<Trending />
</div>
