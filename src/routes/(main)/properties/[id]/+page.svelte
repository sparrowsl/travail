<script>
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import Button from "$lib/components/Button.svelte";
	import Image from "$lib/components/Image.svelte";
	import Input from "$lib/components/Input.svelte";

	/** @type {import("./$types").PageServerData} */
	export let data;
	const { property } = data;
	// prettier-ignore
	$: ({ data: { user }} = $page);
</script>

<article class="rounded bg-white/70 max-w-3xl p-2">
	<h1 class="font-semibold text-xl mb-5 text-gray-700">Details</h1>

	<section class="flex flex-col pr-5 justify-between lg:flex-row">
		<figure class="w-fit">
			<Image
				src="/uploads/{property.photo}"
				alt={property.title}
				class="bg-cover rounded object-cover h-72 w-auto"
			/>
			<figcaption class="mt-2">
				<h4 class="flex capitalize items-center justify-between">
					<span class="text-sm">{property.type}</span>
					<span>
						{#each { length: 5 } as _}
							<i class="text-yellow text-lg i-mdi:star" />
						{/each}
					</span>
				</h4>

				<h4 class="font-semibold mt-2 text-lg text-gray-900">{property.title}</h4>
				<p>
					<i class="text-xl text-gray-700 i-mdi:map-marker" />
					<span class="text-sm text-gray-500">
						{property.location}
					</span>
				</p>

				<p class="my-2">
					<span class="font-ptsans text-gray-700">Price:</span>
					<span class="font-semibold text-lg text-teal-700">${property.price}</span>
					<span class="font-ptsans text-sm text-gray-500">for one day</span>
				</p>

				<p class="max-w-26rem text-gray-700 whitespace-pre-wrap">{property.description}</p>
			</figcaption>
		</figure>

		<figure class="h-fit w-64">
			<Image src={property?.user?.avatar} alt={property.user.name} class="rounded-full mx-auto w-32" />
			<figcaption class="mt-2 text-center">
				<h4 class="font-semibold text-lg text-gray-700">{property.user.name}</h4>
				<p class="text-sm text-teal-700">{property.user.email}</p>
				<p class="font-ptsans text-gray-600">Agent</p>
				<p class="text-sm text-gray-700">
					<i class="text-xl text-gray-700 i-mdi:map-marker" />
					North Carolina, USA
				</p>
				<p class="font-semibold font-ptsans text-gray-600">2 properties</p>

				{#if property.userId === user.id}
					<div class="flex my-5 gap-10 justify-between">
						<a
							href="/properties/{property.id}/edit"
							class="bg-accent rounded text-white w-full grid place-content-center"
						>
							<i class="text-xl i-mdi:edit" />
						</a>
						<form action="?/deleteProperty" method="post" class="w-full" use:enhance>
							<Input type="hidden" name="propertyId" value={property.id} />
							<Button class="bg-red-400 text-white w-full">
								<i class="text-xl i-mdi:trash" />
							</Button>
						</form>
					</div>
				{/if}

				<Button type="button" class="bg-accent mt-10 w-full">Book now</Button>
			</figcaption>
		</figure>
	</section>
</article>
