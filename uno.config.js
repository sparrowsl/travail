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
				roboto: "Roboto",
				raleway: "Raleway",
			},
		}),
	],
	theme: {
		colors: {
			brand: {
				primary: "#0C2D57", // #0A1D56
				secondary: "#FF6868",
			},
		},
	},
	extractors: [extractorSvelte()],
	transformers: [transformerVariantGroup()],
	shortcuts: {
		"bg-accent": "bg-blue-500 text-white",
		container: "max-w-7xl mx-auto",
	},
});
