<script>
	export let src = /** @type {string|undefined|null} */ ("");
	export let alt = "";
	export let loading = /** @type {"lazy"|"eager"} */ ("lazy");
</script>

<img {src} {alt} class={$$props.class} {loading} />
