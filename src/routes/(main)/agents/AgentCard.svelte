<script>
	import Image from "$lib/components/Image.svelte";

	/** @type {any} */
	export let agent;
</script>

<figure class="bg-white rounded py-4 flex gap-5 max-w-4xl">
	<Image src={agent.avatar} class="h-20 rounded-full" />
	<figcaption>
		<div class="flex items-center gap-5">
			<h3 class="font-semibold text-gray-800">{agent.name}</h3>
			<p class="text-gray-400 text-sm font-semibold">Real-Estate Agent</p>
		</div>

		<div class="flex gap-5 flex-wrap mt-3">
			<p class="flex items-center gap-1 text-sm text-gray-700">
				<i class="i-mdi:email-outline text-xl" />
				{agent.email}
			</p>
			<p class="flex items-center gap-1 text-sm text-gray-700">
				<i class="i-mdi:location text-xl" />
				{agent?.location ?? "Los Angeles"}
			</p>
			<p class="flex items-center gap-1 text-sm text-gray-700">
				<i class="i-mdi:phone-outline text-xl" />
				{agent?.contact ?? "+232-99-905-600"}
			</p>
			<p class="flex items-center gap-1 text-sm text-gray-700">
				<i class="i-mdi:city text-xl" />
				{agent?.properties.length ?? 0} properties
			</p>
		</div>
	</figcaption>
</figure>
