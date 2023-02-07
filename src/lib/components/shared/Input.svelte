<script>
	export let type = "text";
	export let classes = "";
	export let disabled = false;
	export let value = "";
	export let required = false;
	export let placeholder;
	export let name;
</script>

<input
	{type}
	{disabled}
	{required}
	{placeholder}
	{name}
	on:input={(e) => (value = e.target.value)}
	class="{classes} font-raleway block w-full rounded border border-gray-200
  p-2 text-gray-700 focus:outline-gray-400"
/>
