<script>
	import LoginForm from "../lib/components/LoginForm.svelte";
</script>

<svelte:head>
	<title>Travail - Login</title>
</svelte:head>

<main class="bg-slate-200">
	<section class="grid h-screen lg:grid-cols-2">
		<div class="grid place-content-center bg-blue-500 p-4 text-center">
			<h1 class="font-pt-sans z-10 mb-2 text-5xl font-bold text-white">Travail</h1>
			<p
				class="font-raleway z-[1] translate-y-[-30%] rotate-3 transform rounded-md bg-slate-700 p-2
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
