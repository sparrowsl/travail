<script>
import Image from "$lib/components/Image.svelte";

/** @type {import("$lib/types").User} */
export let agent;
</script>

<figure class="bg-white rounded flex max-w-4xl py-4 gap-5">
	<Image src={agent?.avatar} class="rounded-full h-20" />
	<figcaption>
		<div class="flex gap-5 items-center">
			<h3 class="font-semibold text-gray-800">{agent?.name}</h3>
			<p class="font-semibold text-sm text-gray-400">Real-Estate Agent</p>
			<p class="text-sm text-blue">@{agent.username}</p>
		</div>

		<div class="flex flex-wrap mt-3 gap-5">
			<p class="flex text-sm text-gray-700 gap-1 items-center">
				<i class="text-xl i-mdi:email-outline" />
				<span>{agent?.email}</span>
			</p>
			<p class="flex text-sm text-gray-700 gap-1 items-center">
				<i class="text-xl i-mdi:location" />
				<span>{agent?.location || "Los Angeles"}</span>
			</p>
			<p class="flex text-sm text-gray-700 gap-1 items-center">
				<i class="text-xl i-mdi:phone-outline" />
				<span>{agent?.contact || "+232-99-905-600"}</span>
			</p>
			<p class="flex text-sm text-gray-700 gap-1 items-center">
				<i class="text-xl i-mdi:city" />
				{agent?.properties?.length || 0} properties
			</p>
		</div>
	</figcaption>
</figure>
