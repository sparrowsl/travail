<script>
	import { page } from "$app/stores";

	const links = [
		{ name: "Dashboard", href: "/dashboard", icon: "i-ic:baseline-dashboard" },
		{ name: "Properties", href: "/properties", icon: "i-mdi:home-city" },
		{ name: "Agents", href: "/agents", icon: "i-mdi:people" },
		{ name: "Reviews", href: "/reviews", icon: "i-ant-design:star-outlined" },
		{ name: "Messages", href: "/messages", icon: "i-mdi:chat-outline" },
		{ name: "Profile", href: "/profile", icon: "i-mdi:account-circle-outline" },
		// { name: "Logout", href: "/logout", icon: "i-ant-design:logout-outlined" },
	];

	$: currentPath = `/${$page.url.pathname.split("/")[1]}`;
</script>

<aside class="h-screen bg-white w-max">
	<nav class="">
		<!-- Logo / Brand -->
		<a href="/dashboard" class="p-7 block font-ptsans text-2xl text-gray-800">Travail💼</a>

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
			<form action="/logout" method="POST" class="text-gray-500 rounded-md">
				<button class="flex gap-2 items-center p-3">
					<i class="i-ant-design:logout-outlined text-2xl" />
					<span class="font-bold tracking-wider w-full">Logout</span>
				</button>
			</form>
		</ul>
	</nav>
</aside>
