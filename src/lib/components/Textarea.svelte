<script>
export const name = "";
export const id = "";
export const rows = 5;
export const value = "";
export const required = true;
export const label = "";
export const labelClass = "block mb-2 text-gray-700 block";
export const placeholder = "";
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
