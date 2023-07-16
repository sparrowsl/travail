<script>
	import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<div class="min-h-screen bg-gray-200">
	<Sidebar />
	<main class="">
		<slot />
	</main>
</div>
