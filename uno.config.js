import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerVariantGroup } from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";
import { presetForms } from "@julr/unocss-preset-forms";

export default defineConfig({
	presets: [
		presetForms(),
		presetIcons(),
		presetUno(),
		presetWebFonts({
			fonts: {
				ptsans: "PT Sans",
				raleway: "Raleway",
			},
		}),
	],
	extractors: [extractorSvelte()],
	transformers: [transformerVariantGroup()],

	// .active {
	// 	@apply font-bold text-gray-900;
	// }
});
