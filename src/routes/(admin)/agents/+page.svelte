<script>
	import AgentCard from "./AgentCard.svelte";

	export let data;
</script>

<div class="flex items-center justify-between mb-4">
	<h1 class="text-xl font-semibold text-gray-700">Agents</h1>
	<a
		href="/agents/new"
		class="text-sm flex items-center gap-2 bg-accent font-bold rounded p-2"
	>
		<i class="i-mdi:plus text-2xl" />
		<span>Add Agent</span>
	</a>
</div>

<section class="mt-5 grid gap-2">
	{#each data.agents as agent (agent.id)}
		<a
			href="/agents/{agent.id}"
			class="max-w-3xl transition hover:(shadow-lg scale-[1.015])"
		>
			<AgentCard {agent} />
		</a>
	{/each}
</section>
