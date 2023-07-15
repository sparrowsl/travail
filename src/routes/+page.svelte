<script>
	import LoginForm from "$lib/components/LoginForm.svelte";
</script>

<main class="bg-slate-200">
	<section class="grid h-screen lg:grid-cols-2">
		<div class="grid place-content-center bg-blue-500 p-4 text-center">
			<h1 class="z-10 mb-6 font-ptsans text-5xl font-bold text-gray-100">Travail 💼</h1>
			<p
				class="font-raleway z-[1] rotate-6 transform rounded-md bg-slate-700 p-2
				font-light text-white shadow-lg md:text-xl"
			>
				One stop place to get your jobs or hire candidates.
			</p>
		</div>

		<div class="grid place-content-center">
			<LoginForm />
		</div>
	</section>
</main>
