<script>
	import Image from "../lib/components/shared/Image.svelte";

	export let title;
</script>

<div class="grid place-content-center gap-1">
	<h1 class="text-center font-pt-sans text-2xl text-gray-700 md:text-4xl">{title}</h1>
	<Image
		src="/page_not_found.svg"
		alt="Error_Page"
		classes="mx-auto h-auto w-48 animate-bounce md:w-72"
	/>
	<p class="text-center font-pt-sans text-xl capitalize text-gray-600">
		<a href="/home" class="text-blue-500">Home</a>
	</p>
</div>
