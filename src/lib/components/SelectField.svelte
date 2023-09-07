<script>
	export let name = "";
	export let id = "";
	export let required = true;
</script>

<select
	{name}
	{id}
	{required}
	class="{$$props.class} text-gray-700 w-full rounded capitalize border-gray/50"
	on:change
>
	<slot>
		<option>--------------</option>
	</slot>
</select>
