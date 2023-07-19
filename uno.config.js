import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerVariantGroup } from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";
import { presetForms } from "@julr/unocss-preset-forms";

export default defineConfig({
	presets: [
		presetForms(),
		presetIcons({
			extraProperties: {
				display: "inline-block",
				"vertical-align": "middle",
			},
		}),
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
	shortcuts: { "bg-accent": "bg-blue-500 text-white" },
});
