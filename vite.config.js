import { sveltekit } from "@sveltejs/kit/vite";
import unocss from "unocss/vite";
import { defineConfig, searchForWorkspaceRoot } from "vite";

export default defineConfig({
	plugins: [sveltekit(), unocss()],
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd()), "/uploads"],
		},
	},
	test: {
		include: ["tests/**/*.{test,spec}.{js,ts}"],
	},
});
