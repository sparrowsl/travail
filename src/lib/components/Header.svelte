<script>
	import { enhance } from "$app/forms";
	import Image from "./Image.svelte";
	import Input from "./Input.svelte";
</script>

<header class="bg-white p-3 flex items-center justify-between">
	<form action="" method="POST" class="flex items-center border-gray/30 bg-gray/20 rounded-md" use:enhance>
		<i class="i-ant-design:search-outlined text-2xl text-gray-600 block ml-2" />
		<Input type="search" class="bg-transparent border-0 text-sm" placeholder="Search for something" />
	</form>

	<figure class="flex justify-end items-center font-ptsans gap-2">
		<Image src="/profile.jpg" class="w-12" />
		<figcaption class="flex flex-col">
			<h3 class="text-gray-700">John Doe</h3>
			<p class="text-(sm gray-500)">john@mail.com</p>
		</figcaption>
	</figure>
</header>
