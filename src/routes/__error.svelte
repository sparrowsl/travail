<script context="module">
	export const load = ({ error, status }) => {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	};
</script>

<script>
	export let title;
</script>

<main class="grid h-screen place-content-center gap-10 bg-gray-100">
	<h1 class="font-pt-sans text-center text-2xl text-gray-700 md:text-4xl">{title}</h1>
	<img
		src="/page_not_found.svg"
		alt="Error_Page"
		class="mx-auto h-auto w-48 animate-bounce md:w-72"
	/>
	<p class="font-pt-sans text-center text-xl capitalize text-gray-600">
		return <a href="/" class="text-blue-500">Home</a>
	</p>
</main>
