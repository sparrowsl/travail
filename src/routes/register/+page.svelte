<script>
	import Input from "$lib/components/Input.svelte";
	import Button from "$lib/components/Button.svelte";
</script>

<main class="bg-gray-200">
	<section class="container mx-auto grid min-h-screen place-content-center md:p-10">
		<form action="" class="min-w-[20em] rounded-md bg-white p-5 shadow-lg md:(min-w-[25em] p-10)">
			<fieldset class="grid gap-5">
				<legend class="mb-5 font-raleway text-lg font-semibold text-gray-500">Register</legend>

				<label for="" class="block font-raleway text-sm text-gray-600">
					<span>Full Name</span>
					<Input name="fullname" class="" placeholder="John Smith" />
				</label>

				<label for="" class="block font-raleway text-sm text-gray-600">
					<span>Email</span>
					<Input type="email" name="email" placeholder="john@gmail.com" class="" />
				</label>

				<label for="" class="block font-raleway text-sm text-gray-600">
					<span>Password</span>
					<Input type="password" name="password" placeholder="password" />
				</label>

				<label for="terms" class="font-ptsans text-sm text-gray-600 flex gap-1 items-center">
					<Input type="checkbox" name="terms" class="" id="terms" />
					<span>You accept our Terms &amp; Conditions</span>
				</label>

				<Button class="rounded-full bg-gray-700 text-white hover:bg-gray-800">Register</Button>
			</fieldset>

			<p class="mt-4 text-center font-ptsans text-sm text-gray-500">
				Already have an Account? <a href="/" class="text-blue-600">Login Here</a>
			</p>
		</form>
	</section>
</main>
