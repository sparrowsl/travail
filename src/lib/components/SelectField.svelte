<script>
	export let name = "";
	export let id = "";
	export let required = true;
	export let label = "";
	export let labelClass = "block mb-2 text-gray-700 block";
</script>

<label for={id || name}>
	<span class="{labelClass} text-sm">{label}</span>
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
</label>
