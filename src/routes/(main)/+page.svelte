<script>
import PropertyCard from "$lib/components/PropertyCard.svelte";

export let data;
</script>

<main>
	<header>
		<div class="grid place-content-center bg-blue-50 text-white min-h-50vh">
			<h1 class="font-ptsans text-5xl text-center font-bold text-brand-primary">
				Travail 🏠
			</h1>
			<p class="rotate-6 mt-5 transform rounded bg-slate-800 p-2 font-raleway">
				One stop place to get affordable houses for rent or purchase.
			</p>
		</div>
	</header>

	<section class="container py-10">
		<h3
			class="text-brand-primary mb-5 uppercase tracking-wider font-semibold text-center font-roboto"
		>
			Latest Homes
		</h3>

		<div class="grid grid-cols-4 gap-5">
			{#each { length: 6 } as _}
				<PropertyCard property={{}} />
			{/each}
		</div>
	</section>
</main>
