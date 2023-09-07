<script>
	import { onMount } from "svelte";
	import { CategoryScale, Chart, BarController, LinearScale, BarElement } from "chart.js";

	/** @type {HTMLCanvasElement} */
	let element;
	onMount(() => {
		Chart.register(BarController, CategoryScale, LinearScale, BarElement);
		new Chart(element, {
			type: "bar",
			data: {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"],
				datasets: [
					{
						label: "Total Revenue",
						data: [500, 450, 350, 100, 650, 150, 200, 250, 300, 400, 550, 600],
						backgroundColor: "rgb(59, 130, 246)",
						borderRadius: 5,
						minBarLength: 0,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
						ticks: { callback: (value) => `${value}K` },
					},
				},
			},
		});
	});
</script>

<section class="p-5 basis-full bg-white rounded-md">
	<div class="flex justify-between items-center mb-7">
		<h3 class="font-semibold text-gray-700 text-lg">Total Revenue</h3>

		<div class="flex items-center gap-5">
			<label for="lastMonth" class="flex items-center gap-1 text-sm hover:cursor-pointer">
				<input type="radio" class="" checked name="month" id="lastMonth" />
				<span>Last Month</span>
			</label>
			<label for="currentMonth" class="flex items-center gap-1 text-sm hover:cursor-pointer">
				<input type="radio" class="" name="month" id="currentMonth" />
				<span>Running Month</span>
			</label>
		</div>
	</div>

	<!-- TODO: total revenue amount -->

	<!-- Bar Chart for revenue -->
	<canvas bind:this={element} />
</section>

<style>
	canvas {
		margin-top: 2 em;
		/* height: 30rem !important; */
		width: 100% !important;
	}
</style>
