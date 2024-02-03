<script>
	import Image from "$lib/components/Image.svelte";

	/** @type {import("$lib/types").User} */
	export let agent;
</script>

<figure class="bg-white rounded flex max-w-4xl py-4 gap-5">
	<Image src={String(agent?.avatar)} class="rounded-full h-20" />
	<figcaption>
		<div class="flex gap-5 items-center">
			<h3 class="font-semibold text-gray-800">{agent?.name}</h3>
			<p class="font-semibold text-sm text-gray-400">Real-Estate Agent</p>
		</div>

		<div class="flex flex-wrap mt-3 gap-5">
			<p class="flex text-sm text-gray-700 gap-1 items-center">
				<i class="text-xl i-mdi:email-outline" />
				{agent?.email}
			</p>
			<p class="flex text-sm text-gray-700 gap-1 items-center">
				<i class="text-xl i-mdi:location" />
				{agent?.location || "Los Angeles"}
			</p>
			<p class="flex text-sm text-gray-700 gap-1 items-center">
				<i class="text-xl i-mdi:phone-outline" />
				{agent?.contact || "+232-99-905-600"}
			</p>
			<p class="flex text-sm text-gray-700 gap-1 items-center">
				<i class="text-xl i-mdi:city" />
				{agent?.properties?.length || 0} properties
			</p>
		</div>
	</figcaption>
</figure>
