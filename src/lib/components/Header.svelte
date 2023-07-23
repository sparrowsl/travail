<script>
	import { page } from "$app/stores";
	import Image from "./Image.svelte";

	// prettier-ignore
	$: ({data: { user }} = $page);
</script>

<header class="bg-white p-3 flex items-center justify-between">
	<button
		type="button"
		class="bg-accent px-2 rounded-sm md:hidden"
		on:click={() => console.log("show sidebar")}
	>
		<i class="i-mdi:menu-close text-xl" />
	</button>

	<figure class="flex justify-end items-center font-ptsans gap-2 ml-auto">
		<Image src={user.avatar ?? "/profile.jpg"} class="w-12" />
		<figcaption class="flex flex-col">
			<h3 class="text-gray-700">{user.name}</h3>
			<p class="text-(sm gray-500)">{user.email}</p>
		</figcaption>
	</figure>
</header>
