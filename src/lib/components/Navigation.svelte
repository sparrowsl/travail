<script>
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";
	import NavProfile from "./NavProfile.svelte";

	$: currentPath = $page.url.pathname;
</script>

<!-- <aside class="hidden md:block"> -->
<header class="sticky top-0 bg-white shadow">
	<nav class="container mx-auto flex items-center justify-between">
		<!-- Logo / Brand -->
		<div class="font-pt-sans py-5 text-3xl text-gray-700 hover:text-gray-800">Travail 💼</div>

		<!-- Menu items -->
		<div class="flex items-center gap-24">
			<div class="flex gap-5">
				<a href="/home" class="font-raleway text-gray-700" class:active={currentPath === "/home"}>
					<span>Home</span>
				</a>
				<a href="/user/notifications" class="font-raleway text-gray-700">
					<span>Notifications</span>
				</a>
				<a href="/about" class="font-raleway text-gray-700">
					<span>About</span>
				</a>
			</div>

			<NavProfile />
		</div>
	</nav>
</header>
