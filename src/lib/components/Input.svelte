<script>
	export let type = "text";
	export let disabled = false;
	export let value = "";
	export let required = false;
	export let placeholder = "";
	export let name = "";
	export let id = "";
</script>

<input
	{type}
	{disabled}
	{required}
	{placeholder}
	{name}
	{value}
	{id}
	on:input={(e) => (value = e.target.value)}
	class="{$$props.class} font-raleway block {type !== 'checkbox' && 'w-full'} rounded text-gray-700"
/>
