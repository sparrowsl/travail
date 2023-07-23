<script>
	import AgentCard from "./AgentCard.svelte";

	export let data;
</script>

<h1 class="text-xl font-semibold text-gray-700">Agents</h1>

<section class="grid gap-5 mt-5">
	{#each data.agents as agent (agent.id)}
		<AgentCard {agent} />
	{/each}
</section>
