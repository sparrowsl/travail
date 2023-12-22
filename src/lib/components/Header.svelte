<script>
	import { page } from "$app/stores";
	import Image from "./Image.svelte";

	// prettier-ignore
	$: ({data: { user }} = $page);
</script>

<header class="bg-white flex p-3 items-center justify-between">
	<button type="button" class="bg-accent rounded-sm px-2 md:hidden">
		<i class="text-xl i-mdi:menu-close" />
	</button>

	<figure class="flex font-ptsans ml-auto gap-2 justify-end items-center">
		<Image src={user.avatar || `https://robohash.org/${user.name}`} class="w-12" />
		<figcaption class="flex flex-col">
			<h3 class="text-gray-700">{user.name}</h3>
			<p class="text-(sm gray-500)">{user.email}</p>
		</figcaption>
	</figure>
</header>
