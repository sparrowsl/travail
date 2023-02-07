<script>
	let tac = false;

	const handleRegister = async () => {
		console.log("TaC accepted?:", tac);
	};
</script>

<main class="bg-gray-200">
	<section class="container mx-auto grid min-h-screen place-content-center md:p-10">
		<form
			action=""
			class="min-w-[20em] rounded-md bg-white p-5 shadow-lg md:min-w-[25em] md:p-10"
			on:submit|preventDefault={handleRegister}
		>
			<fieldset class="grid gap-5">
				<legend class="mb-5 font-raleway text-lg font-semibold text-gray-500">Register</legend>

				<div>
					<label for="" class="block font-raleway text-sm text-gray-500">Full Name</label>
					<input
						type="text"
						name="fullname"
						class="block w-full rounded-md border-[1px] p-2 font-raleway text-gray-600"
						placeholder="John Smith"
					/>
				</div>
				<div>
					<label for="" class="block font-raleway text-sm text-gray-500">Email</label>
					<input
						type="email"
						name="email"
						class="block w-full rounded-md border-[1px] p-2 font-raleway text-gray-600"
						placeholder="john@gmail.com"
					/>
				</div>

				<div>
					<label for="" class="block font-raleway text-sm text-gray-500">Password</label>
					<input
						type="password"
						name="password"
						class="block w-full rounded-md border-[1px] p-2 font-raleway text-gray-600"
						placeholder="password"
					/>
				</div>

				<div>
					<label for="" class="block font-raleway text-sm text-gray-500">Confirm Password</label>
					<input
						type="password"
						name="confirm-password"
						class="block w-full rounded-md border-[1px] p-2 font-raleway text-gray-600"
						placeholder="password"
					/>
				</div>

				<p class="font-pt-sans text-sm text-gray-600">
					<input type="checkbox" name="terms" id="" class="" bind:checked={tac} />
					<span> You accept our Terms &amp; Conditions and Privacy Policy </span>
				</p>

				<button
					type="submit"
					class="block rounded-full bg-gray-700 p-2 font-pt-sans font-semibold
      text-white hover:bg-gray-800"
				>
					Register
				</button>
			</fieldset>

			<p class="mt-4 text-center font-pt-sans text-sm text-gray-500">
				Already have an Account? <a href="/" class="text-blue-600">Login Here</a>
			</p>
		</form>
	</section>
</main>
