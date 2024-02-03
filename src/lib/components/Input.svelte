<script>
	export let type = "text";
	export let disabled = false;
	export let required = true;
	export let value = "";
	export let placeholder = "";
	export let name = "";
	export let id = "";
	export let min = 0;
	export let accept = "";
</script>

<input
	{type}
	{disabled}
	{required}
	{placeholder}
	{name}
	{value}
	id={id || name}
	{min}
	{accept}
	on:input={(e) => (value = e?.target?.value)}
	on:change
	class="{$$props.class} font-raleway block {type !== 'checkbox' &&
		'w-full'} border-gray/50 rounded text-gray-700"
/>
