import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { plugin as markdown } from "vite-plugin-markdown";

export default defineConfig({
  plugins: [tailwindcss(), react(), markdown({ mode: ["html"] })],
});
