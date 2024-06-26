<script>
import { onNavigate } from "$app/navigation";
import { browser } from "$app/environment";
import { navigating } from "$app/stores";
import { fade, scale } from "svelte/transition";
import { Toaster } from "svelte-sonner";
import "@unocss/reset/tailwind.css";
import "uno.css";

onNavigate(async (navigation) => {
	// @ts-ignore
	if (!document.startViewTransition) return;

	return new Promise((oldStateCaptureResolve) => {
		// @ts-ignore
		document.startViewTransition(async () => {
			oldStateCaptureResolve();
			await navigation.complete;
		});
	});
});
</script>

{#if $navigating && browser}
	<div
		in:fade
		out:scale
		class="bg-gray/30 grid inset-0 absolute place-content-center"
	>
		<i class="text-6xl i-svg-spinners:gooey-balls-2" />
	</div>
{/if}

<Toaster position="top-right" closeButton richColors />
<slot />
