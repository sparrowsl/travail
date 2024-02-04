<script>
	import Image from "$lib/components/Image.svelte";
</script>

<div class="grid h-80vh place-content-center gap-1 font-ptsans">
	<h1 class="text-center font-ptsans text-2xl text-gray-700 md:text-4xl">
		Oops!! Page not found
	</h1>
	<Image
		src="/page_not_found.svg"
		alt="Error_Page"
		class="mx-auto h-auto w-48 md:w-72 my-4"
	/>
	<a
		href="/dashboard"
		class="text-center block text-xl capitalize text-blue-500">Dashboard</a
	>
</div>
