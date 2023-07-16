<script>
	/** @type {"submit"|"button"|"reset"} */
	export let type = "submit";
</script>

<button {type} class="{$$props.class} block p-2 font-ptsans font-semibold" on:click>
	<slot>Click me</slot>
</button>
