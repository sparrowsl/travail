<script>
	import { browser } from "$app/environment";
	import { navigating } from "$app/stores";
	import { fade, scale } from "svelte/transition";
	import "@unocss/reset/tailwind.css";
	import "uno.css";
</script>

{#if $navigating && browser}
	<div in:fade out:scale class="absolute inset-0 grid place-content-center bg-gray/30">
		<i class="i-svg-spinners:gooey-balls-2 text-6xl" />
	</div>
{/if}

<slot />
