<script>
	export let src = "";
	export let alt = "";
	/** @type {"lazy"|"eager"} */
	export let loading = "lazy";
</script>

<img {src} {alt} class={$$props.class} {loading} />
