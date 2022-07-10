<script>
	import Job from "$lib/components/Job.svelte";
	const jobs = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
</script>

<svelte:head>
	<title>Travail - Feeds</title>
</svelte:head>

<section class="grid gap-5 p-4">
	<!-- <h1 class="font-pt-sans text-4xl">Feed</h1> -->
	{#each jobs as job}
		<Job {job} />
	{/each}
</section>
