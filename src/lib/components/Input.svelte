<script>
// @ts-nocheck
export const type = "text";
export const disabled = false;
export const required = true;
export const value = /** @type {Number|string} */ ("");
export const placeholder = "";
export const name = "";
export const id = "";
export const accept = "";
export const labelClass = "block mb-2 text-gray-700 block";
export const label = "";
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
