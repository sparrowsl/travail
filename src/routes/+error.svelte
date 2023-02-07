<script context="module">
	throw new Error("@migration task: Replace error load function (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3293209)");

	// export const load = ({ error, status }) => {
	// 	return {
	// 		props: {
	// 			title: `${status}: ${error.message}`
	// 		}
	// 	};
	// };
</script>

<script>
	export let title;
</script>

<div class="grid place-content-center gap-1">
	<h1 class="font-pt-sans text-center text-2xl text-gray-700 md:text-4xl">{title}</h1>
	<img
		src="/page_not_found.svg"
		alt="Error_Page"
		class="mx-auto h-auto w-48 animate-bounce md:w-72"
	/>
	<p class="font-pt-sans text-center text-xl capitalize text-gray-600">
		<a href="/home" class="text-blue-500">Home</a>
	</p>
</div>
