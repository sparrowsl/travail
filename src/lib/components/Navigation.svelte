<script>
	import { page } from "$app/stores";

	$: currentPath = $page.url.pathname;
</script>

<aside class="hidden md:block">
	<div class="sticky top-0">
		<nav class="grid min-h-screen place-content-center p-5">
			<!-- Logo / Brand -->
			<div class="font-pt-sans py-5 text-3xl text-gray-700 hover:text-gray-800">Travail 💼</div>

			<ul class="grid gap-5">
				<li
					class="font-raleway text-gray-700 hover:font-bold"
					class:active={currentPath === "/feed"}
				>
					<a href="/feed">
						<span>Home</span>
					</a>
				</li>

				<li
					class="font-raleway text-gray-700 hover:font-bold"
					class:active={currentPath === "/feed/profile"}
				>
					<a href="/feed/profile">
						<span>Profile</span>
					</a>
				</li>

				<li
					class="font-raleway text-gray-700 hover:font-bold"
					class:active={currentPath === "/feed/notifications"}
				>
					<a href="/feed/notifications">
						<span>Notifications</span>
					</a>
				</li>

				<li
					class="font-raleway text-gray-700 hover:font-bold"
					class:active={currentPath === "/feed/settings"}
				>
					<a href="/feed/settings">
						<span>Settings</span>
					</a>
				</li>

				<li
					class="font-raleway text-gray-700 hover:font-bold"
					class:active={currentPath === "/feed/about"}
				>
					<a href="/feed/about">
						<span>About</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</aside>
