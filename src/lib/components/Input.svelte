<script>
	export let type = "text";
	export let disabled = false;
	export let value = "";
	export let required = false;
	export let placeholder = "Enter something";
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
	{id}
	{min}
	{accept}
	on:input={(e) => (value = e.target.value)}
	on:change
	class="{$$props.class} font-raleway block {type !== 'checkbox' &&
		'w-full'} border-gray/50 rounded text-gray-700"
/>
