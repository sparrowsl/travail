<script>
	import LoginForm from "$lib/components/LoginForm.svelte";
</script>

<main class="bg-slate-200">
	<section class="grid h-screen lg:grid-cols-2">
		<div class="grid place-content-center bg-blue-500 p-4 text-center">
			<h1 class="mb-6 font-ptsans text-5xl font-bold text-white">Travail 💼</h1>
			<p
				class="font-raleway rotate-6 transform rounded bg-slate-600 p-2 font-light text-white shadow-lg md:text-lg"
			>
				One stop place to get your estate houses.
			</p>
		</div>

		<LoginForm />
	</section>
</main>
