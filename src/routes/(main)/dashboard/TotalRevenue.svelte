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
						data: [65, 59, 20, 11, 56, 55, 40, 55, 30, 42, 36, 16],
						backgroundColor: [
							"rgba(255, 99, 132, 0.2)",
							"rgba(255, 159, 64, 0.2)",
							"rgba(255, 205, 86, 0.2)",
							"rgba(75, 192, 192, 0.2)",
							"rgba(54, 162, 235, 0.2)",
							"rgba(153, 102, 255, 0.2)",
							"rgba(201, 203, 207, 0.2)",
						],
						borderColor: [
							"rgb(255, 99, 132)",
							"rgb(255, 159, 64)",
							"rgb(255, 205, 86)",
							"rgb(75, 192, 192)",
							"rgb(54, 162, 235)",
							"rgb(153, 102, 255)",
							"rgb(201, 203, 207)",
						],
						borderWidth: 1,
					},
				],
			},
			options: {
				scales: {
					y: { beginAtZero: true },
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
