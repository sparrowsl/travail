<script>
	import { page } from "$app/stores";
	import Button from "$lib/components/Button.svelte";
	import Image from "$lib/components/Image.svelte";
</script>

<h1 class="text-xl font-semibold text-gray-700">My Profile</h1>

<figure class="flex items-center gap-5 bg-white rounded max-w-2xl py-7 mt-3">
	<Image src={$page.data.user.avatar} />
	<figcaption>
		<h2 class="font-semibold text-gray-700 text-2xl font-ptsans">{$page.data.user.name}</h2>
		<p class="text-gray-400 text-sm font-semibold mt-2">Real-Estate Agent</p>
		<p class="flex items-center gap-1 text-gray-700 mt-3">
			<i class="i-mdi:email-outline text-xl" />
			{$page.data.user.email}
		</p>
		<p class="flex items-center gap-1 text-gray-700 mt-3">
			<i class="i-mdi:location text-xl" />
			{$page.data.user?.location ?? "Los Angeles"}
		</p>
		<p class="flex items-center gap-1 text-gray-700 mt-3">
			<i class="i-mdi:phone-outline text-xl" />
			{$page.data.user?.contact ?? "+232-99-905-600"}
		</p>
		<p class="flex items-center gap-1 text-gray-700 mt-3">
			<i class="i-mdi:city text-xl" />
			{$page.data.user?.properties?.length ?? 0} properties
		</p>

		<Button type="button" class="bg-accent px-4 mt-5">Update Account</Button>
	</figcaption>
</figure>

<!-- <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl">
	{#each data.agent?.properties as property (property.id)}
		<PropertyCard {property} />
	{/each}
</section> -->
