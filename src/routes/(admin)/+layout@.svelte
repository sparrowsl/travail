<script>
	import Header from "./Header.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<div class="min-h-screen bg-gray-200 grid grid-cols-[max-content_1fr]">
	<Sidebar />
	<main class="font-raleway h-100dvh overflow-y-scroll">
		<Header />
		<div class="p-3">
			<slot />
		</div>
	</main>
</div>
