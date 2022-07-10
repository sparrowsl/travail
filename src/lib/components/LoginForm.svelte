<script></script>

<form
	action=""
	class="rounded-md bg-white p-5 shadow-sm md:p-10"
	on:submit|preventDefault={() => console.log("logged in")}
>
	<fieldset class="grid gap-5">
		<legend class="font-raleway mb-5 text-lg font-semibold text-gray-500">Login Now</legend>

		<div>
			<label for="" class="font-raleway block text-sm text-gray-500">Email</label>
			<input
				type="email"
				class="font-raleway block rounded-md border-[1px] p-2 text-gray-600"
				placeholder="john@gmail.com"
			/>
		</div>

		<div>
			<label for="" class="font-raleway block text-sm text-gray-500">Password</label>
			<input
				type="password"
				class="font-raleway block rounded-md border-[1px] p-2 text-gray-600"
				placeholder="password"
			/>
		</div>

		<button
			type="submit"
			class="font-pt-sans block rounded-full bg-gray-700 p-2 font-semibold
      text-white hover:bg-gray-800"
		>
			Login
		</button>
	</fieldset>

	<p class="font-pt-sans mt-4 text-center text-sm text-gray-500">
		Need an Account? <a href="/" class="text-blue-600">Register Here</a>
	</p>
</form>
