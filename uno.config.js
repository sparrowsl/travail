import { presetForms } from "@julr/unocss-preset-forms";
import extractorSvelte from "@unocss/extractor-svelte";
import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerVariantGroup,
} from "unocss";

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
