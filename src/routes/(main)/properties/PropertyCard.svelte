<script>
	import Image from "$lib/components/Image.svelte";
</script>

<figure class="bg-white/20 p-2">
	<Image src="/house.jpeg" class="w-full h-50 bg-contain object-cover rounded-md" />
	<figcaption class="py-5">
		<div class="flex justify-between gap-5 mb-2">
			<h3>Lorem ipsum dolor sit amet.</h3>
			<span class="bg-blue/20 font-ptsans h-fit py-1 px-2 block text-sm rounded">$15000</span>
		</div>

		<p class="text-sm font-light">
			<i class="i-mdi:map-marker text-xl" />
			<span class="text-gray-500">Lorem ipsum dolor sit amet, consec</span>
		</p>
	</figcaption>
</figure>
