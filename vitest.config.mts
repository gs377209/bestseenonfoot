import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    include: ["**/__vitests__/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    typecheck: {
      tsconfig: "./__vitests__/tsconfig.json",
    },
  },
});
