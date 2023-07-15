<script>
	export let type = "button";
	export let classes;
</script>

<button {type} class="{classes} block p-2 font-ptsans font-semibold" on:click>
	<slot>Click me</slot>
</button>
