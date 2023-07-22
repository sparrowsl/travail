<script>
	import Image from "$lib/components/Image.svelte";

	/** @type {import("$lib/types.js").Property} */
	export let property;
</script>

<figure class="bg-white/30 p-2 rounded">
	<Image src="/uploads/{property.photo}" class="w-full h-50 bg-contain object-cover rounded-md" />
	<figcaption class="py-5">
		<div class="flex justify-between gap-5 mb-2">
			<h3>{property.title}</h3>
			<span class="bg-blue/20 font-ptsans h-fit py-1 px-2 block text-sm rounded">${property.price}</span>
		</div>

		<p class="text-sm font-light">
			<i class="i-mdi:map-marker text-xl" />
			<span class="text-gray-500">{property.location}</span>
		</p>
	</figcaption>
</figure>
