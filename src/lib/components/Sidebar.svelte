<script>
import { enhance } from "$app/forms";
import { page } from "$app/stores";

const links = [
	{ name: "Dashboard", href: "/dashboard", icon: "i-mdi:view-dashboard" },
	{ name: "Properties", href: "/properties", icon: "i-mdi:home-city" },
	{ name: "Agents", href: "/agents", icon: "i-mdi:people" },
	{ name: "Reviews", href: "/reviews", icon: "i-mdi:hexagram-outline" },
	{ name: "Messages", href: "/messages", icon: "i-mdi:chat-outline" },
	{ name: "Profile", href: "/profile", icon: "i-mdi:account-circle-outline" },
];

$: currentPath = `/${$page.url.pathname.split("/")[1]}`;
</script>

<aside class="h-screen bg-white w-max">
	<nav class="">
		<!-- Logo / Brand -->
		<a href="/dashboard" class="p-7 block font-ptsans text-2xl text-gray-800">
			Travai🏠
		</a>

		<!-- Menu items -->
		<ul class="flex flex-col font-raleway text-sm py-2 px-4">
			{#each links as { name, href, icon } (name)}
				<li
					class="{currentPath === href
						? 'bg-accent'
						: 'text-gray-500 hover:bg-gray/10'} flex gap-3 items-center rounded-md p-3"
				>
					<i class="{icon} text-2xl" />
					<a {href} class="font-bold tracking-wider w-full">{name}</a>
				</li>
			{/each}
			<form
				action=""
				method="POST"
				class="text-gray-500 rounded-md"
				use:enhance
			>
				<button class="flex gap-2 items-center p-3" type="button">
					<i class="i-mdi:logout text-2xl" />
					<span class="font-bold tracking-wider w-full">Logout</span>
				</button>
			</form>
		</ul>
	</nav>
</aside>
