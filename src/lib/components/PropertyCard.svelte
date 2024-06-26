<script>
import Image from "$lib/components/Image.svelte";

/** @type {import("$lib/types.js").Property} */
export let property;
</script>

<a href="/properties/{property.id}">
	<figure class="bg-white/70 p-2 rounded">
		<Image
			src="/uploads/{property.photo}"
			class="w-full h-50 bg-cover bg-center object-center rounded-md"
		/>
		<figcaption class="py-5">
			<div class="flex justify-between">
				<h3 class="line-clamp-1">{property.title}</h3>
				<p class="bg-blue/20 font-ptsans h-fit py-1 px-2 block text-sm rounded">
					${property.price}
				</p>
			</div>
			<p class="text-sm font-light">
				<i class="i-mdi:map-marker text-xl text-gray-700" />
				<span class="text-gray-500">{property.location}</span>
			</p>
		</figcaption>
	</figure>
</a>
