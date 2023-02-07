<script>
	import Icon from "@iconify/svelte";
</script>

<!-- Profile picture -->
<div class="relative">
	<img src="/profile.jpg" alt="" class="w-12 hover:cursor-pointer" />
	<!-- options -->
	<div
		class="absolute top-full -left-10 -right-5 mt-2 flex flex-col gap-3
				rounded-md bg-white p-3 shadow-lg"
	>
		<a href="/home" class="flex items-center gap-1 font-raleway text-sm text-gray-700">
			<Icon icon="simple-icons:whatsapp" class="" />
			<span>Profile</span>
		</a>
		<a href="/home" class="flex items-center gap-1 font-raleway text-sm text-gray-700">
			<Icon icon="simple-icons:whatsapp" class="" />
			<span>Settings</span>
		</a>
		<a href="/api/auth/logout" class="flex items-center gap-1 font-raleway text-sm text-gray-700">
			<Icon icon="simple-icons:whatsapp" class="" />
			<span>Logout</span>
		</a>
	</div>
</div>
