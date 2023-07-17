<script>
	import Chart from "chart.js/auto";
	import { onMount } from "svelte";

	export let title = "";
	export let value = 0;
	/** @type {import("chart.js").ChartData} */
	export let data;

	/** @type {HTMLCanvasElement} */
	let element;
	onMount(() => {
		new Chart(element, {
			type: "doughnut",
			data,
		});
	});
</script>

<div class="bg-white rounded-md p-5 flex items-center justify-between">
	<div>
		<p class="text-gray-600 text-sm">{title}</p>
		<h3 class="text-2xl font-ptsans text-gray-800">{value}</h3>
	</div>
	<!-- Chart plot -->
	<canvas bind:this={element} />
</div>

<style>
	canvas {
		height: 90px !important;
	}
</style>
