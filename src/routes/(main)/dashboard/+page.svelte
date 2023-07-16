<script>
	const jobs = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
</script>

<svelte:head>
	<title>Travail - Jobs</title>
</svelte:head>

<section class="container mx-auto">
	<h1 class="font-ptsans text-4xl">Feed</h1>
	{#each jobs as job}
		<!-- <Job {job} /> -->
		<p>{JSON.stringify(job)}</p>
	{/each}
</section>
