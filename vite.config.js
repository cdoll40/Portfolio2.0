import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// server: {
	// 	port: 3000,
	// },
	base: "/portfolio2-0",
	assetsInclude: ["**/*.PNG"],
});
