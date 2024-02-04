<script>
	export let name = "";
	export let id = "";
	export let rows = 5;
	export let value = "";
	export let required = true;
	export let label = "";
	export let labelClass = "block mb-2 text-gray-700 block";
	export let placeholder = "";
</script>

<label for={id || name}>
	<span class="{labelClass} text-sm">{label}</span>
	<textarea
		{name}
		{id}
		{rows}
		{required}
		{placeholder}
		class="{$$props.class} w-full block border-gray/50 rounded resize-none text-gray-700"
		{value}
		on:input={(e) => (value = e?.target?.value)}
	/>
</label>
