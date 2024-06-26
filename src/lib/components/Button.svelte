<script>
/** @type {"submit"|"button"|"reset"} */
export const type = "submit";
</script>

<button
	{type}
	class="{$$props.class} block p-2 font-ptsans font-semibold rounded"
	on:click
>
	<slot>Click me</slot>
</button>
