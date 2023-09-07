<script>
	export let name = "";
	export let id = "";
	export let rows = 5;
	export let value = "";
	export let required = true;
	export let placeholder = "Write something";
</script>

<textarea
	{name}
	{id}
	{rows}
	{required}
	{placeholder}
	class="{$$props.class} w-full block border-gray/50 rounded resize-none text-gray-700"
	{value}
	on:input={(e) => (value = e.target.value)}
/>
