<script>
	// @ts-nocheck
	export let type = "text";
	export let disabled = false;
	export let required = true;
	export let value = /** @type {Number|string} */ ("");
	export let placeholder = "";
	export let name = "";
	export let id = "";
	export let accept = "";
	export let labelClass = "block mb-2 text-gray-700 block";
	export let label = "";
</script>

<label for={id || name}>
	<span class="{labelClass} text-sm">{label}</span>
	<input
		{type}
		{disabled}
		{required}
		{placeholder}
		{name}
		{value}
		id={id || name}
		min={$$props.min}
		{accept}
		on:input={(e) => (value = e?.target?.value)}
		on:change
		class="{$$props.class} {type === 'file' || type === 'checkbox'
			? 'w-fit'
			: 'w-full'} font-raleway block border-gray/50 rounded text-gray-700"
	/>
</label>
