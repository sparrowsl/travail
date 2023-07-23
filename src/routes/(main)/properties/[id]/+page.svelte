<script>
	import { enhance } from "$app/forms";
	import Button from "$lib/components/Button.svelte";
	import Image from "$lib/components/Image.svelte";
	import Input from "$lib/components/Input.svelte";

	/** @type {import("./$types").PageServerData} */
	export let data;

	const { property } = data;
</script>

<article class="bg-white/70 p-2 rounded max-w-3xl">
	<h1 class="text-xl font-semibold text-gray-700 mb-5">Details</h1>

	<section class="flex flex-col justify-between pr-5 lg:flex-row">
		<figure class="w-fit">
			<Image
				src="/uploads/{property.photo}"
				alt={property.title}
				class="w-auto h-72 object-cover bg-cover rounded"
			/>
			<figcaption class="mt-2">
				<h4 class="capitalize flex items-center justify-between">
					<span class="text-sm">{property.type}</span>
					<span>
						{#each { length: 5 } as _}
							<i class="i-mdi:star text-yellow text-lg" />
						{/each}
					</span>
				</h4>

				<h4 class="mt-2 text-lg font-semibold text-gray-900">{property.title}</h4>
				<p>
					<i class="i-mdi:map-marker text-xl text-gray-700" />
					<span class="text-sm text-gray-500">
						{property.location}
					</span>
				</p>

				<p class="my-2">
					<span class="font-ptsans text-gray-700">Price:</span>
					<span class="text-lg text-teal-700 font-semibold">${property.price}</span>
					<span class="text-sm font-ptsans text-gray-500">for one day</span>
				</p>

				<p class="text-gray-700 max-w-26rem">{property.description}</p>
			</figcaption>
		</figure>

		<figure class="w-64 h-fit">
			<Image src={property?.user?.avatar} alt={property.user.name} class="w-32 rounded-full mx-auto" />
			<figcaption class="text-center mt-2">
				<h4 class="font-semibold text-gray-700 text-lg">{property.user.name}</h4>
				<p class="text-sm text-teal-700">{property.user.email}</p>
				<p class="text-gray-600 font-ptsans">Agent</p>
				<p class="text-sm text-gray-700">
					<i class="i-mdi:map-marker text-xl text-gray-700" />
					North Carolina, USA
				</p>
				<p class="font-semibold font-ptsans text-gray-600">2 properties</p>

				<div class="flex justify-between gap-10 my-5">
					<Button type="button" class="bg-accent w-full text-white">
						<i class="i-mdi:edit text-xl" />
					</Button>
					<form action="?/deleteProperty" method="post" class="w-full" use:enhance>
						<Input type="hidden" name="propertyId" value={property.id} />
						<Button class="bg-red-400 w-full text-white">
							<i class="i-mdi:trash text-xl" />
						</Button>
					</form>
				</div>

				<Button type="button" class="bg-accent w-full mt-10">Book now</Button>
			</figcaption>
		</figure>
	</section>
</article>
