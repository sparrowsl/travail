<script>
	import Navigation from "$lib/components/Navigation.svelte";
</script>

<div class="min-h-screen bg-gray-200">
	<Navigation />
	<main class="">
		<slot />
	</main>
</div>
