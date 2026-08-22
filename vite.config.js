import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],

	// Use relative base path to ensure seamless GitHub Pages deployment on any repository name or custom domain
	base: "./",

	resolve: {
		alias: {
			"@": "/src",
		},
	},

	server: {
		port: 3000,
	},

	build: {
		outDir: "dist",
		sourcemap: false,
	},
});
