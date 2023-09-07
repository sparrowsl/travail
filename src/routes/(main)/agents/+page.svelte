<script>
	import AgentCard from "./AgentCard.svelte";

	export let data;
</script>

<h1 class="text-xl font-semibold text-gray-700">Agents</h1>

<section class="grid gap-2 mt-5">
	{#each data.agents as agent (agent.id)}
		<a href="/agents/{agent.id}" class="max-w-3xl transition hover:(shadow-lg scale-[1.015])">
			<AgentCard {agent} />
		</a>
	{/each}
</section>
