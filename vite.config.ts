import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    vanillaExtractPlugin(),
    dts({
      include: ["lib/main.tsx"],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace("/lib", ""),
        content,
      }),
    }),
  ],
  build: {
    lib: {
      entry: resolve("lib", "main.tsx"),
      name: "ReactFeatureFlag",
      fileName: (format) => `react-3d-hover-card.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});
