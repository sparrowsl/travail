<script>
	import { onMount } from "svelte";
	import { ArcElement, Chart, DoughnutController } from "chart.js";

	export let title = "";
	export let value = 0;
	/** @type {import("chart.js").ChartData} */
	export let data;

	/** @type {HTMLCanvasElement} */
	let element;
	onMount(() => {
		Chart.register(DoughnutController, ArcElement);
		new Chart(element, { type: "doughnut", data });
	});
</script>

<div class="bg-white rounded-md p-5 flex items-center justify-between">
	<div>
		<p class="text-gray-600 text-sm">{title}</p>
		<h3 class="text-2xl font-ptsans text-gray-800">{value}</h3>
	</div>

	<!-- Chart plot -->
	<canvas bind:this={element} class="h-[80px_!important]" />
</div>
