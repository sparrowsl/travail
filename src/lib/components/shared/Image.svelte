<script>
	export let src;
	export let alt;
	export let loading = "lazy";
</script>

<img {src} {alt} class={$$props.class} {loading} />
